import { getIngredients, placeOrder as createOrder } from "../../utils/data";
import { IIngredient, IOrderableIngredient, TIngredientType } from '../../utils/types';

import {
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
    HIDE_ORDER_DETAILS,
    SWITCH_TAB,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    MOVE_INGREDIENT_IN_CONSTRUCTOR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_BURGER_INGREDIENTS_FAILED,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILED
} from '../constants/burger';
import { AppDispatch } from "../types";
import { IShowIngredientDetailsAction } from "../types/burger";
import { RootState } from '../types/index';

export function showIngredientDetails(ingredient: IIngredient): IShowIngredientDetailsAction {
    return {type: SHOW_INGREDIENT_DETAILS, payload: ingredient};
}

export function hideIngredientDetails() {
    return {type: HIDE_INGREDIENT_DETAILS}
}

export function hideOrderDetails() {
    return { type: HIDE_ORDER_DETAILS }
}

export function switchTab(tab: TIngredientType) {
    return { type: SWITCH_TAB, payload: tab }
}

export function addIngredientToConstructor(ingredient: IIngredient) {
    return {
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        payload: ingredient
    }
}

export function removeIngredientFromConstructor(generatedId: string) {
    return {
        type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
        payload: generatedId
    }
}

export function moveIngredientInConstructor(shiftedGeneratedId: string, droppedIngredient: IOrderableIngredient) {
    return {
        type: MOVE_INGREDIENT_IN_CONSTRUCTOR,
        payload: { 
            shiftedGeneratedId: shiftedGeneratedId,
            droppedIngredient: droppedIngredient
        }
    }
}

export function fetchIngredientsThunk() {
    return function(dispatch: AppDispatch) {
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

export function placeOrderThunk() {
    return function(dispatch: AppDispatch, getState: () => RootState) {
        const {
            constructorBunIngredient,
            constructorFillingIngredients
        } = getState().burger;

        if (constructorBunIngredient === null || constructorFillingIngredients.length === 0) {
            return;
        }

        dispatch({ type: PLACE_ORDER_REQUEST });

        const ingredientsIds = [constructorBunIngredient, ...constructorFillingIngredients, constructorBunIngredient]
            .map(ingredient => ingredient._id);

        createOrder(ingredientsIds)
            .then(data => {
                dispatch({ type: PLACE_ORDER_SUCCESS, payload: data});
            })
            .catch(e => {
                dispatch({ type: PLACE_ORDER_FAILED});
            })
    }
}