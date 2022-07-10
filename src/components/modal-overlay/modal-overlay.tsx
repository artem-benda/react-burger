import { FC } from "react";
import styles from "./modal-overlay.module.css";
import { SyntheticEvent } from 'react';

interface IModalOverlayProps {
    onClick: (event: SyntheticEvent) => void
}

const ModalOverlay: FC<IModalOverlayProps> = ({ onClick }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClick} onMouseDown={onClick}></div>
    );
}

export default ModalOverlay;