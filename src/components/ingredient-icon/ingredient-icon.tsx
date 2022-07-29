import { FC } from "react";
import styles from "./ingredient-icon.module.css";

interface IIngredientIconProps {
    imageUrl: string;
    className?: string;
}

const IngredientIcon: FC<IIngredientIconProps> = ({imageUrl, className}) => {
    return (
        <span className={`${styles.ingredientIcon} ${className}`}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat"
            }} 
            />
    );
}

export default IngredientIcon;