import { createReducer } from "@reduxjs/toolkit";
import { IOrders } from "../types/order";
import { allOrdersWsConnecting, allOrdersWsOpen, allOrdersWsClose, allOrdersWsError, allOrdersWsMessage, myOrdersWsConnecting, myOrdersWsOpen, myOrdersWsClose, myOrdersWsError, myOrdersWsMessage } from '../actions/order';

interface IAllOrdersWsState {
  isConnected: boolean;
  isConnecting: boolean;
  connectingError: string;
  allOrders: IOrders;
}

const initialStateAll: IAllOrdersWsState = {
  isConnected: false,
  isConnecting: false,
  connectingError: '',
  allOrders: { orders: [], total: 0, totalToday: 0}
};

export const allOrdersReducer = createReducer(initialStateAll, (builder) => {
  builder.addCase(allOrdersWsConnecting, (state) => {
    state.isConnecting = true;
    state.isConnected = false;
    state.connectingError = '';
  });
  builder.addCase(allOrdersWsOpen, (state) => {
    state.isConnecting = false;
    state.isConnected = true;
    state.connectingError = '';
  });
  builder.addCase(allOrdersWsClose, (state) => {
    state.isConnecting = false;
    state.isConnected = false;
    state.connectingError = '';
  });
  builder.addCase(allOrdersWsError, (state, action) => {
    state.connectingError = action.payload;
  });
  builder.addCase(allOrdersWsMessage, (state, action) => {
    state.allOrders = action.payload;
  });
});

interface IMyOrdersWsState {
  isConnected: boolean;
  isConnecting: boolean;
  connectingError: string;
  myOrders: IOrders;
}

const initialStateMy: IMyOrdersWsState = {
  isConnected: false,
  isConnecting: false,
  connectingError: '',
  myOrders: { orders: [], total: 0, totalToday: 0}
};

export const myOrdersReducer = createReducer(initialStateMy, (builder) => {
  builder.addCase(myOrdersWsConnecting, (state) => {
    state.isConnecting = true;
    state.isConnected = false;
    state.connectingError = '';
  });
  builder.addCase(myOrdersWsOpen, (state) => {
    state.isConnecting = false;
    state.isConnected = true;
    state.connectingError = '';
  });
  builder.addCase(myOrdersWsClose, (state) => {
    state.isConnecting = false;
    state.isConnected = false;
    state.connectingError = '';
  });
  builder.addCase(myOrdersWsError, (state, action) => {
    state.connectingError = action.payload;
  });
  builder.addCase(myOrdersWsMessage, (state, action) => {
    state.myOrders = action.payload;
  });
});
