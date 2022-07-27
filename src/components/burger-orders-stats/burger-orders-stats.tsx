import { FC, useMemo } from "react";
import styles from './burger-order-details.module.css';
import { IOrder } from '../../services/types/burger';

interface IBurgerOrdersStatsProps {
    readonly orders: ReadonlyArray<IOrder>;
    readonly total: number;
    readonly totalToday: number;
}

const BurgerOrdersStats: FC<IBurgerOrdersStatsProps> = ({orders, total, totalToday}) => {

    const doneOrders = useMemo(() => orders.filter(order => order.status === 'done'), [orders]);
    const pendingOrders = useMemo(() => orders.filter(order => order.status === 'pending'), [orders]);

    return (
        <article className={styles.detailsContainer}>
            <div>
                <div>
                    <p>Готовы:</p>
                    { doneOrders.map( order =>
                        <p>{order.number}</p>
                    )}
                </div>
                <div>
                    <p>В работе:</p>
                    { pendingOrders.map( order =>
                        <p>{order.number}</p>
                    )}
                </div>
            </div>
            <div>
                <p>Выполнено за все время:</p>
                <p>{total}</p>
            </div>
            <div>
                <p>Выполнено за сегодня:</p>
                <p>{totalToday}</p>
            </div>
        </article>
    )
}

export default BurgerOrdersStats;