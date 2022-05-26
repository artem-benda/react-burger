import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './modal.module.css';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

function Modal(props) {
    const { onDismiss, title } = props

    useEffect(() =>{
        const escKeyboardHandler = event => {      
            if (event.key === 'Escape') {
              event.preventDefault();
              onDismiss();
            }
          };
          document.addEventListener('keydown', escKeyboardHandler);
          return () => {
            document.removeEventListener('keydown', escKeyboardHandler);
          };
    }, [onDismiss])

    const onOverlayClick = (event) => {
        if (event.currentTarget === event.target) {
            event.stopPropagation();
            event.preventDefault();
            onDismiss();
        }
    }

    const onCloseIconClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onDismiss();
    }

    return ReactDOM.createPortal(
            <ModalOverlay onClick={onOverlayClick}>
                <section className={styles.modal}>
                    <header className="pt-5 pl-10 pr-10">
                        <span className={styles.closeButton + ' pl-5 pr-5 pt-7 pb-5'} onClick={onCloseIconClick} onMouseDown={onCloseIconClick}>
                            <CloseIcon type="primary" />
                        </span>
                        <p className="text text_type_main-large p-5">{title}</p>
                    </header>
                    <article className="pl-20 pr-20 pb-15">
                        {props.children}
                    </article>
                </section>
            </ModalOverlay>,
            modalRoot
        );
}

Modal.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Modal;