import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './modal.module.css';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

function Modal({ onDismiss, title, children }) {

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

    const onCloseAction = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onDismiss();
    }

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onCloseAction} />
            <section className={styles.modal}>
                <header className="pt-5 pl-10 pr-10">
                    <span className={styles.closeButton + ' pl-5 pr-5 pt-7 pb-5'} onClick={onCloseAction} onMouseDown={onCloseAction}>
                        <CloseIcon type="primary" />
                    </span>
                    <p className="text text_type_main-large p-5">{title}</p>
                </header>
                <article className="pl-20 pr-20 pb-15">
                    {children}
                </article>
            </section>
            </>,
            modalRoot
        );
}

Modal.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Modal;