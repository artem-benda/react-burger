import {
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_BURGER_INGREDIENTS_FAILED,
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
    HIDE_ORDER_DETAILS,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILED
} from "../actions/burger"

const initialState = {
    availableIngredients: [],
    constructorBunIngredient: null,
    constructorFillingIngredients: [],
    ingredientDetails: null,
    orderDetails: null,

    getIngredientsRequest: false,
    getIngredientsFailed: false,

    placeOrderRequest: false,
    placeOrderFailed: false
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BURGER_INGREDIENTS_REQUEST: {
            return {
                ...state,
                getIngredientsRequest: true
            }
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsFailed: false,
                availableIngredients: action.payload
            }
        }
        case GET_BURGER_INGREDIENTS_FAILED: {
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsFailed: true
            }
        }
        case SHOW_INGREDIENT_DETAILS: {
            return {
                ...state,
                ingredientDetails: action.payload
            }
        }
        case HIDE_INGREDIENT_DETAILS: {
            return {
                ...state,
                ingredientDetails: null
            }
        }
        case HIDE_ORDER_DETAILS: {
            return {
                ...state,
                orderDetails: null
            }
        }
        case PLACE_ORDER_REQUEST: {
            return {
                ...state,
                placeOrderRequest: true
            }
        }
        case PLACE_ORDER_SUCCESS: {
            return {
                ...state,
                placeOrderRequest: false,
                placeOrderFailed: false,
                orderDetails: action.payload
            }
        }
        case PLACE_ORDER_FAILED: {
            return {
                ...state,
                placeOrderRequest: false,
                placeOrderFailed: true
            }
        }
        default: {
            return state;
        }
    }
}