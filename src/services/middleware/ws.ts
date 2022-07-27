import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, Middleware } from "@reduxjs/toolkit";
import { RootState } from "../types";
import TokenService from '../../utils/token';

export interface IWsActions {
  wsConnect: ActionCreatorWithoutPayload;
  wsDisconnect: ActionCreatorWithoutPayload;
  wsSendMessage?: ActionCreatorWithPayload<any>;
  wsConnecting: ActionCreatorWithoutPayload;
  onOpen: ActionCreatorWithoutPayload;
  onClose: ActionCreatorWithoutPayload;
  onError: ActionCreatorWithPayload<string>;
  onMessage: ActionCreatorWithPayload<any>;
}

export const createWsMiddleware = (wsUrl: string, wsActions: IWsActions, isNeedAuth: boolean): Middleware<{}, RootState> => {
  return store => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { payload } = action;
      const { wsConnect, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      const user = getState().auth.user;
      const token = TokenService.getLocalAccessToken
      if (wsConnect.match(action) && (!isNeedAuth || (user && token))) {
        socket = new WebSocket(isNeedAuth ? `${wsUrl}?token=${token}` : wsUrl);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (wsSendMessage?.match(action) && (!isNeedAuth || (user && token))) {
          const message = isNeedAuth ? { ...payload, token: token } : payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};