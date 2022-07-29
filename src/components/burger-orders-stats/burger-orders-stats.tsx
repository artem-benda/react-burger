import { FC, useMemo } from "react";
import styles from './burger-orders-stats.module.css';
import { IOrders } from "../../services/types/order";

interface IBurgerOrdersStatsProps {
    readonly orders: IOrders
}

const BurgerOrdersStats: FC<IBurgerOrdersStatsProps> = ({orders}) => {

    const doneOrders = useMemo(() => orders.orders.filter(order => order.status === 'done'), [orders]);
    const pendingOrders = useMemo(() => orders.orders.filter(order => order.status === 'pending'), [orders]);

    return (
        <article className={styles.detailsContainer}>
            <div className={styles.ordersContainer}>
                <div className={styles.ordersByStateBlock}>
                    <p className="text text_type_main-medium">Готовы:</p>
                    <div className={styles.ordersByStateContainer}>
                    { doneOrders.map( order =>
                        <p key={order._id} className={`${styles.orderItem} ${styles.orderItemDone} text text_type_digits-default`}>{order.number}</p>
                    )}
                    </div>
                </div>
                <div className={styles.ordersByStateBlock}>
                    <p className="text text_type_main-medium">В работе:</p>
                    <div className={styles.ordersByStateContainer}>
                    { pendingOrders.map( order =>
                        <p key={order._id} className={`${styles.orderItem} text text_type_digits-default`}>{order.number}</p>
                    )}
                    </div>
                </div>
            </div>
            <div className="p-6">
                <p className="text text_type_main-medium">Выполнено за все время:</p>
                <p className="text text_type_digits-large">{orders.total}</p>
            </div>
            <div className="p-6">
                <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                <p className="text text_type_digits-large">{orders.totalToday}</p>
            </div>
        </article>
    )
}

export default BurgerOrdersStats;