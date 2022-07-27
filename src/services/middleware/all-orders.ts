import { allOrdersConnect, allOrdersDisonnect, allOrdersWsConnecting, allOrdersWsOpen, allOrdersWsClose, allOrdersWsMessage, allOrdersWsError } from '../actions/order';
import { createWsMiddleware } from './ws';
export const allOrdersMiddleware = createWsMiddleware(
    'wss://norma.nomoreparties.space/orders/all',
    {
        wsConnect: allOrdersConnect,
        wsConnecting: allOrdersWsConnecting,
        wsDisconnect: allOrdersDisonnect,
        onOpen: allOrdersWsOpen,
        onClose: allOrdersWsClose,
        onMessage: allOrdersWsMessage,
        onError: allOrdersWsError
    },
    false // isNeedAuth = false
);