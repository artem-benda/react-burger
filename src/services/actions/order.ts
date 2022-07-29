import { createAction } from "@reduxjs/toolkit";
import { IOrders } from "../types/order";

export const allOrdersConnect = createAction('ALL_ORDERS_CONNECT');
export const allOrdersDisonnect = createAction('ALL_ORDERS_DISCONNECT');
export const allOrdersWsConnecting = createAction('ALL_ORDERS_WS_CONNECTING');
export const allOrdersWsOpen = createAction('ALL_ORDERS_WS_OPEN');
export const allOrdersWsClose = createAction('ALL_ORDERS_WS_CLOSE');
export const allOrdersWsError = createAction<string, 'ALL_ORDERS_WS_ERROR'>('ALL_ORDERS_WS_ERROR');
export const allOrdersWsMessage = createAction<IOrders, 'ALL_ORDERS_WS_MESSAGE'>('ALL_ORDERS_WS_MESSAGE');

export const myOrdersConnect = createAction('MY_ORDERS_CONNECT');
export const myOrdersDisonnect = createAction('MY_ORDERS_DISCONNECT');
export const myOrdersWsConnecting = createAction('MY_ORDERS_WS_CONNECTING');
export const myOrdersWsOpen = createAction('MY_ORDERS_WS_OPEN');
export const myOrdersWsClose = createAction('MY_ORDERS_WS_CLOSE');
export const myOrdersWsError = createAction<string, 'MY_ORDERS_WS_ERROR'>('MY_ORDERS_WS_ERROR');
export const myOrdersWsMessage = createAction<IOrders, 'MY_ORDERS_WS_MESSAGE'>('MY_ORDERS_WS_MESSAGE');
