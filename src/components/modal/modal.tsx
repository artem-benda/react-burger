import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, ReactNode, SyntheticEvent, useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './modal.module.css';
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')!;

interface IModalProps {
    title?: string;
    onDismiss: () => void;
    children: ReactNode
}

const Modal: FC<IModalProps> = ({ onDismiss, title, children }) => {

    useEffect(() =>{
        const escKeyboardHandler = (event: KeyboardEvent) => {      
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

    const onCloseAction = (event: SyntheticEvent) => {
        event.stopPropagation();
        event.preventDefault();
        onDismiss();
    }

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onCloseAction} />
            <section className={`${styles.modal} modal-dialog`}>
                <header className="pt-5 pl-10 pr-10">
                    <span className={styles.closeButton + ' pl-5 pr-5 pt-7 pb-5 modal-dialog-close-button'} onClick={onCloseAction} onMouseDown={onCloseAction}>
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

export default Modal;