import { FC } from "react";
import styles from "./ingredient-food-value.module.css";

interface IngredientFoodValueProps {
    name: string;
    value: number;
}

const IngredientFoodValue: FC<IngredientFoodValueProps> = ({ name, value }) => {
    return (
        <div className={styles.enegryValueContainer}>
            <p className="text text_type_main-default text_color_inactive">{name}</p>
            <p className="text text_type_digits-default text_color_inactive pt-5">{value}</p>
        </div>
    );
};

export default IngredientFoodValue;