import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
    return (
        <div className={styles.modalOverlay} onClick={props.onClick} onMouseDown={props.onClick}>
            {props.children}
        </div>
    );
}

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ModalOverlay;