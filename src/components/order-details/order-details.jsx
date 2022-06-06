import React from "react";
import PropTypes from "prop-types";
import styles from "./order-details.module.css";
import doneImage from "../../images/done.png";

function OrderDetails({ orderDetails }) {
    return (
        <article className={styles.orderDetailsContainer}>
            <p className="text text_type_digits-large pt-2 pl-5 pr-5">{orderDetails.order.number}</p>
            <p className="text text text_type_main-medium pt-8">идентификатор заказа</p>
            <img src={doneImage} alt="Заказ принят" className={styles.doneImage + ' pt-15'} />
            <p className="text text text_type_main-default pt-15">Ваш заказ начали готовить</p>
            <p className="text text text_type_main-default text_color_inactive pt-2">Дождитесь готовности на орбитальной станции</p>
        </article>
    );
}

OrderDetails.propTypes = {
    orderDetails: PropTypes.shape({
        name: PropTypes.string,
        order: PropTypes.shape({number: PropTypes.number.isRequired}),
        success: PropTypes.bool.isRequired
    }).isRequired
}

export default OrderDetails;