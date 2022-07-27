import { myOrdersConnect, myOrdersDisonnect, myOrdersWsConnecting, myOrdersWsOpen, myOrdersWsClose, myOrdersWsMessage, myOrdersWsError } from '../actions/order';
import { createWsMiddleware } from './ws';
export const myOrdersMiddleware = createWsMiddleware(
    'wss://norma.nomoreparties.space/orders',
    {
        wsConnect: myOrdersConnect,
        wsConnecting: myOrdersWsConnecting,
        wsDisconnect: myOrdersDisonnect,
        onOpen: myOrdersWsOpen,
        onClose: myOrdersWsClose,
        onMessage: myOrdersWsMessage,
        onError: myOrdersWsError
    },
    true // isNeedAuth = true
);