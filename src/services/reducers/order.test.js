import { allOrdersReducer, myOrdersReducer } from './order';
import * as types from '../constants/order';

const allOrdersInitialState = {
  isConnected: false,
  isConnecting: false,
  connectingError: '',
  allOrders: { orders: [], total: 0, totalToday: 0}
}

describe('allOrders reducer', () => {
    it('should return the initial state', () => {
        expect(allOrdersReducer(undefined, {})).toEqual(allOrdersInitialState);
    });

    it('should handle ALL_ORDERS_WS_CONNECTING', () => {
        expect(
            allOrdersReducer(allOrdersInitialState, {
            type: types.ALL_ORDERS_WS_CONNECTING
        })
        ).toEqual({
            ...allOrdersInitialState,
            isConnecting: true
          });
    });

    it('should handle ALL_ORDERS_WS_OPEN', () => {
        expect(
            allOrdersReducer({
                ...allOrdersInitialState,
                isConnecting: true
              }, {
            type: types.ALL_ORDERS_WS_OPEN
        })
        ).toEqual({
            ...allOrdersInitialState,
            isConnected: true
          });
    });

    it('should handle ALL_ORDERS_WS_CLOSE', () => {
        expect(
            allOrdersReducer({
                ...allOrdersInitialState,
                isConnected: true
              }, {
            type: types.ALL_ORDERS_WS_CLOSE
        })
        ).toEqual(allOrdersInitialState);
    });

    it('should handle ALL_ORDERS_WS_ERROR', () => {
        expect(
            allOrdersReducer({
                ...allOrdersInitialState,
                isConnecting: true
              }, {
            type: types.ALL_ORDERS_WS_ERROR,
            payload: 'Connection error'
        })
        ).toEqual({
            ...allOrdersInitialState,
            connectingError: 'Connection error'
          });
    });

    it('should handle ALL_ORDERS_WS_MESSAGE', () => {
        expect(
            allOrdersReducer({
                ...allOrdersInitialState,
                isConnected: true
              }, {
            type: types.ALL_ORDERS_WS_MESSAGE,
            payload: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
        })
        ).toEqual({
            ...allOrdersInitialState,
            isConnected: true,
            allOrders: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
          });
    });

});

const myOrdersInitialState = {
  isConnected: false,
  isConnecting: false,
  connectingError: '',
  myOrders: { orders: [], total: 0, totalToday: 0}
}

describe('myOrders reducer', () => {
    it('should return the initial state', () => {
        expect(myOrdersReducer(undefined, {})).toEqual(myOrdersInitialState);
    });

    it('should handle MY_ORDERS_WS_CONNECTING', () => {
        expect(
            myOrdersReducer(myOrdersInitialState, {
            type: types.MY_ORDERS_WS_CONNECTING
        })
        ).toEqual({
            ...myOrdersInitialState,
            isConnecting: true
          });
    });

    it('should handle MY_ORDERS_WS_OPEN', () => {
        expect(
            myOrdersReducer({
                ...myOrdersInitialState,
                isConnecting: true
              }, {
            type: types.MY_ORDERS_WS_OPEN
        })
        ).toEqual({
            ...myOrdersInitialState,
            isConnected: true
          });
    });

    it('should handle MY_ORDERS_WS_CLOSE', () => {
        expect(
            myOrdersReducer({
                ...myOrdersInitialState,
                isConnected: true
              }, {
            type: types.MY_ORDERS_WS_CLOSE
        })
        ).toEqual(myOrdersInitialState);
    });

    it('should handle MY_ORDERS_WS_ERROR', () => {
        expect(
            myOrdersReducer({
                ...myOrdersInitialState,
                isConnecting: true
              }, {
            type: types.MY_ORDERS_WS_ERROR,
            payload: 'Connection error'
        })
        ).toEqual({
            ...myOrdersInitialState,
            connectingError: 'Connection error'
          });
    });

    it('should handle MY_ORDERS_WS_MESSAGE', () => {
        expect(
            myOrdersReducer({
                ...myOrdersInitialState,
                isConnected: true
              }, {
            type: types.MY_ORDERS_WS_MESSAGE,
            payload: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
        })
        ).toEqual({
            ...myOrdersInitialState,
            isConnected: true,
            myOrders: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
          });
    });

});