import React from "react";
import PropTypes from "prop-types";
import styles from "./order-details.module.css";
import doneImage from "../../images/done.png";

function OrderDetails(props) {
    return (
        <article className={styles.orderDetailsContainer}>
            <p className="text text_type_digits-large pt-20">{props.orderNumber}</p>
            <p className="text text text_type_main-medium pt-8">идентификатор заказа</p>
            <img src={doneImage} alt="Заказ принят" className={styles.doneImage + ' pt-15'} />
            <p className="text text text_type_main-default pt-15">Ваш заказ начали готовить</p>
            <p className="text text text_type_main-default text_color_inactive pt-2 pb-20">Дождитесь готовности на орбитальной станции</p>
        </article>
    );
}

OrderDetails.propTypes = {
    orderNumber: PropTypes.string.isRequired
}

export default OrderDetails;