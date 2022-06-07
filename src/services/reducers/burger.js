import {
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_BURGER_INGREDIENTS_FAILED,
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
    HIDE_ORDER_DETAILS,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILED,
    SWITCH_TAB,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    MOVE_INGREDIENT_IN_CONSTRUCTOR
} from "../actions/burger"

const initialState = {
    availableIngredients: [],
    currentTab: 'bun',
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
                orderDetails: action.payload,
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
            }
        }
        case PLACE_ORDER_FAILED: {
            return {
                ...state,
                placeOrderRequest: false,
                placeOrderFailed: true
            }
        }
        case SWITCH_TAB: {
            return {
                ...state,
                currentTab: action.payload
            }
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            const ingredientWithGeneratedId = {
                ...action.payload,
                generatedId: new Date().valueOf()
            }
            return {
                ...state,
                constructorBunIngredient: action.payload.type === 'bun' ? ingredientWithGeneratedId : state.constructorBunIngredient,
                constructorFillingIngredients: action.payload.type === 'bun' ? state.constructorFillingIngredients : [...state.constructorFillingIngredients, ingredientWithGeneratedId]
            }
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            return {
                ...state,
                constructorFillingIngredients: state.constructorFillingIngredients.filter(ingredient => ingredient.generatedId !== action.payload)
            }
        }
        case MOVE_INGREDIENT_IN_CONSTRUCTOR: {
            // TODO
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}