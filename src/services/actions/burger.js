import { getIngredients, placeOrder as createOrder } from "../../utils/data";

export const GET_BURGER_INGREDIENTS_REQUEST = "GET_BURGER_INGREDIENTS_REQUEST";
export const GET_BURGER_INGREDIENTS_SUCCESS = "GET_BURGER_INGREDIENTS_SUCCESS";
export const GET_BURGER_INGREDIENTS_FAILED = "GET_BURGER_INGREDIENTS_FAILED";

export const SHOW_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const HIDE_INGREDIENT_DETAILS = "HIDE_INGREDIENT_DETAILS";

export const PLACE_ORDER_REQUEST = "PLACE_ORDER_REQUEST";
export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_FAILED = "PLACE_ORDER_FAILED";

export const SHOW_ORDER_DETAILS = "SHOW_ORDER_DETAILS";
export const HIDE_ORDER_DETAILS = "HIDE_ORDER_DETAILS";

export const SWITCH_TAB = "SWITCH_TAB";

export const ADD_INGREDIENT_TO_CONSTRUCTOR = "ADD_INGREDIENT_TO_CONSTRUCTOR";
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = "REMOVE_INGREDIENT_FROM_CONSTRUCTOR";
export const MOVE_INGREDIENT_IN_CONSTRUCTOR = "MOVE_INGREDIENT_IN_CONSTRUCTOR";

export function fetchIngredients() {
    return function(dispatch) {
        dispatch({ type: GET_BURGER_INGREDIENTS_REQUEST })
        getIngredients()
            .then(data => {
                dispatch({ type: GET_BURGER_INGREDIENTS_SUCCESS, payload: data});
            })
            .catch(e => {
                dispatch({ type: GET_BURGER_INGREDIENTS_FAILED});
            })
    }
}

export function placeOrder() {
    return function(dispatch, getState) {
        const bunIngredient = getState().burger.constructorBunIngredient;
        const fillingIngredients = getState().burger.constructorFillingIngredients;

        if (bunIngredient === null || fillingIngredients.length === 0) {
            return;
        }

        dispatch({ type: PLACE_ORDER_REQUEST })

        const ingredientsIds = [bunIngredient, ...fillingIngredients, bunIngredient]
            .map(ingredient => ingredient._id);

        createOrder(ingredientsIds)
            .then(data => {
                dispatch({ type: PLACE_ORDER_SUCCESS, payload: data});
            })
            .catch(e => {
                console.log(e);
                dispatch({ type: PLACE_ORDER_FAILED});
            })
    }
}