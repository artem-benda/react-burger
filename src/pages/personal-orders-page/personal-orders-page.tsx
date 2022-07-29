import { useEffect } from 'react';
import styles from './personal-orders-page.module.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { OrderList } from '../../components/order-list/order-list';
import { myOrdersConnect, myOrdersDisonnect } from '../../services/actions/order';

function PersonalOrdersPage() {
  const { 
    myOrders,
    isConnected,
    isConnecting,
    connectingError,
  }  = useAppSelector(store => store.myOrders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(myOrdersConnect());
    return () => {
        dispatch(myOrdersDisonnect());
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <article className={styles.profileContentsColumn}>
      { connectingError &&
        <section className={styles.errorSection + ' mt-10 pl-4 pr-4'}><p>Не удалось установить соединение: {connectingError}</p></section>
      }
      { isConnecting &&
        <section className={styles.infoSection}><p>Устанавливаем соединение...</p></section>
      }
      <section className={styles.appPageContents}>
      { isConnected && myOrders.orders.length > 0 &&
        <>
          <OrderList orders={myOrders} isPersonal={true} />
        </>
      }
      </section>
    </article>
  );
}

export default PersonalOrdersPage;
