import { useEffect } from 'react';
import styles from './burger-orders-page.module.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import BurgerOrdersStats from '../../components/burger-orders-stats/burger-orders-stats';
import { OrderList } from '../../components/order-list/order-list';
import { allOrdersConnect, allOrdersDisonnect } from '../../services/actions/order';

function BurgerOrdersPage() {
  const { 
    allOrders,
    isConnected,
    isConnecting,
    connectingError,
  }  = useAppSelector(store => store.allOrders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(allOrdersConnect());
    return () => {
        dispatch(allOrdersDisonnect());
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <main className="app-page">
      <section className={styles.appPageTitle}><p className="text text_type_main-large pt-10">Лента заказов</p></section>
      { connectingError &&
        <section className={styles.errorSection + ' mt-10 pl-4 pr-4'}><p>Не удалось установить соединение: {connectingError}</p></section>
      }
      { isConnecting &&
        <section className={styles.infoSection}><p>Устанавливаем соединение...</p></section>
      }
      <section className={styles.appPageContents}>
      { isConnected && allOrders.orders.length > 0 &&
        <>
          <OrderList orders={allOrders} isPersonal={false} />
          <BurgerOrdersStats orders={allOrders} />
        </>
      }
      </section>
    </main>
  );
}

export default BurgerOrdersPage;
