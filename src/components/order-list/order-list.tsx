import { FC } from "react"
import { IOrders } from "../../services/types/order"
import BurgerOrder from "../burger-order/burger-order";
import styles from "./order-list.module.css";

interface IOrderList {
    orders: IOrders,
    isPersonal: boolean
}

export const OrderList: FC<IOrderList> = ({orders, isPersonal}) => {
    return (
        <section className={styles.listContainer}>
        { orders.orders.map( order => (
            <BurgerOrder
                order={order}
                isPersonal={isPersonal}
                key={order._id} />
        ))}
        </section>
    );
}