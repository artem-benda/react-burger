import { allOrdersReducer, myOrdersReducer } from './order';
import * as types from '../constants/order';

describe('allOrders reducer', () => {
    it('should return the initial state', () => {
        expect(allOrdersReducer(undefined, {})).toEqual({
            isConnected: false,
            isConnecting: false,
            connectingError: '',
            allOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle ALL_ORDERS_WS_CONNECTING', () => {
        expect(
            allOrdersReducer({
                isConnected: false,
                isConnecting: false,
                connectingError: '',
                allOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.ALL_ORDERS_WS_CONNECTING
        })
        ).toEqual({
            isConnected: false,
            isConnecting: true,
            connectingError: '',
            allOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle ALL_ORDERS_WS_OPEN', () => {
        expect(
            allOrdersReducer({
                isConnected: false,
                isConnecting: true,
                connectingError: '',
                allOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.ALL_ORDERS_WS_OPEN
        })
        ).toEqual({
            isConnected: true,
            isConnecting: false,
            connectingError: '',
            allOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle ALL_ORDERS_WS_CLOSE', () => {
        expect(
            allOrdersReducer({
                isConnected: true,
                isConnecting: false,
                connectingError: '',
                allOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.ALL_ORDERS_WS_CLOSE
        })
        ).toEqual({
            isConnected: false,
            isConnecting: false,
            connectingError: '',
            allOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle ALL_ORDERS_WS_ERROR', () => {
        expect(
            allOrdersReducer({
                isConnected: false,
                isConnecting: true,
                connectingError: '',
                allOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.ALL_ORDERS_WS_ERROR,
            payload: 'Connection error'
        })
        ).toEqual({
            isConnected: false,
            isConnecting: false,
            connectingError: 'Connection error',
            allOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle ALL_ORDERS_WS_MESSAGE', () => {
        expect(
            allOrdersReducer({
                isConnected: true,
                isConnecting: false,
                connectingError: '',
                allOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.ALL_ORDERS_WS_MESSAGE,
            payload: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
        })
        ).toEqual({
            isConnected: true,
            isConnecting: false,
            connectingError: '',
            allOrders: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
          });
    });

});

describe('myOrders reducer', () => {
    it('should return the initial state', () => {
        expect(myOrdersReducer(undefined, {})).toEqual({
            isConnected: false,
            isConnecting: false,
            connectingError: '',
            myOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle MY_ORDERS_WS_CONNECTING', () => {
        expect(
            myOrdersReducer({
                isConnected: false,
                isConnecting: false,
                connectingError: '',
                myOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.MY_ORDERS_WS_CONNECTING
        })
        ).toEqual({
            isConnected: false,
            isConnecting: true,
            connectingError: '',
            myOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle MY_ORDERS_WS_OPEN', () => {
        expect(
            myOrdersReducer({
                isConnected: false,
                isConnecting: true,
                connectingError: '',
                myOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.MY_ORDERS_WS_OPEN
        })
        ).toEqual({
            isConnected: true,
            isConnecting: false,
            connectingError: '',
            myOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle MY_ORDERS_WS_CLOSE', () => {
        expect(
            myOrdersReducer({
                isConnected: true,
                isConnecting: false,
                connectingError: '',
                myOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.MY_ORDERS_WS_CLOSE
        })
        ).toEqual({
            isConnected: false,
            isConnecting: false,
            connectingError: '',
            myOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle MY_ORDERS_WS_ERROR', () => {
        expect(
            myOrdersReducer({
                isConnected: false,
                isConnecting: true,
                connectingError: '',
                myOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.MY_ORDERS_WS_ERROR,
            payload: 'Connection error'
        })
        ).toEqual({
            isConnected: false,
            isConnecting: false,
            connectingError: 'Connection error',
            myOrders: { orders: [], total: 0, totalToday: 0}
          });
    });

    it('should handle MY_ORDERS_WS_MESSAGE', () => {
        expect(
            myOrdersReducer({
                isConnected: true,
                isConnecting: false,
                connectingError: '',
                myOrders: { orders: [], total: 0, totalToday: 0}
              }, {
            type: types.MY_ORDERS_WS_MESSAGE,
            payload: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
        })
        ).toEqual({
            isConnected: true,
            isConnecting: false,
            connectingError: '',
            myOrders: { orders: [ { _id: 1 } ], total: 1, totalToday: 1}
          });
    });

});