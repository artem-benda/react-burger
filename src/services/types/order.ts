import { 
    allOrdersConnect,
    allOrdersDisonnect,
    allOrdersWsClose,
    allOrdersWsConnecting,
    allOrdersWsError,
    allOrdersWsMessage,
    allOrdersWsOpen,
    myOrdersConnect,
    myOrdersDisonnect,
    myOrdersWsClose,
    myOrdersWsConnecting,
    myOrdersWsError,
    myOrdersWsMessage,
    myOrdersWsOpen
} from "../actions/order";
import { IOrder } from "./burger";

export type TAllOrdersActionTypes = ReturnType<typeof allOrdersConnect> |
    ReturnType<typeof allOrdersDisonnect> |
    ReturnType<typeof allOrdersWsConnecting> |
    ReturnType<typeof allOrdersWsOpen> |
    ReturnType<typeof allOrdersWsClose> |
    ReturnType<typeof allOrdersWsError> |
    ReturnType<typeof allOrdersWsMessage>;

export type TMyOrdersActionTypes = ReturnType<typeof myOrdersConnect> |
    ReturnType<typeof myOrdersDisonnect> |
    ReturnType<typeof myOrdersWsConnecting> |
    ReturnType<typeof myOrdersWsOpen> |
    ReturnType<typeof myOrdersWsClose> |
    ReturnType<typeof myOrdersWsError> |
    ReturnType<typeof myOrdersWsMessage>;

export interface IOrders {
    orders: Array<IOrder>;
    total: number;
    totalToday: number;
}
