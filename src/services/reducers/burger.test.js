import { burgerReducer } from './burger';
import * as types from '../constants/burger';
import { ingredient, ingredients, ingredientsWithGeneratedIds, ingredientsWithGeneratedIds2DroppedToPos0, ingredientsWithGeneratedIdsRemoved2, ingredientWithGeneratedId } from '../../utils/test-data'

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

describe('burger reducer', () => {
    it('should return the initial state', () => {
        expect(burgerReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_BURGER_INGREDIENTS_REQUEST', () => {
        expect(
            burgerReducer(initialState, {
            type: types.GET_BURGER_INGREDIENTS_REQUEST
        })
        ).toEqual({
            ...initialState,
            getIngredientsRequest: true
        });
    });

    it('should handle GET_BURGER_INGREDIENTS_FAILED', () => {
        expect(
            burgerReducer({
                ...initialState,
                getIngredientsRequest: true
            }, {
            type: types.GET_BURGER_INGREDIENTS_FAILED
        })
        ).toEqual({
            ...initialState,
            getIngredientsFailed: true
        });
    });

    it('should handle GET_BURGER_INGREDIENTS_SUCCESS', () => {
        expect(
            burgerReducer({
                ...initialState,
                getIngredientsRequest: true
            }, {
            type: types.GET_BURGER_INGREDIENTS_SUCCESS,
            payload: ingredients
        })
        ).toEqual({
            ...initialState,
            availableIngredients: ingredients
        });
    });

    it('should handle SHOW_INGREDIENT_DETAILS', () => {
        expect(
            burgerReducer(initialState, {
            type: types.SHOW_INGREDIENT_DETAILS,
            payload: ingredient
        })
        ).toEqual({
            ...initialState,
            ingredientDetails: ingredient
        });
    });

    it('should handle HIDE_INGREDIENT_DETAILS', () => {
        expect(
            burgerReducer({
                ...initialState,
                ingredientDetails: ingredient
            }, {
            type: types.HIDE_INGREDIENT_DETAILS
        })
        ).toEqual(initialState);
    });

    it('should handle HIDE_ORDER_DETAILS', () => {
        expect(
            burgerReducer({
                ...initialState,
                orderDetails: { _id: 1 }
            }, {
            type: types.HIDE_ORDER_DETAILS
        })
        ).toEqual(initialState);
    });

    it('should handle PLACE_ORDER_REQUEST', () => {
        expect(
            burgerReducer(initialState, {
            type: types.PLACE_ORDER_REQUEST
        })
        ).toEqual({
            ...initialState,
            placeOrderRequest: true
        });
    });

    it('should handle PLACE_ORDER_FAILED', () => {
        expect(
            burgerReducer({
                ...initialState,
                placeOrderRequest: true
            }, {
            type: types.PLACE_ORDER_FAILED
        })
        ).toEqual({
            ...initialState,
            placeOrderFailed: true
        });
    });

    it('should handle PLACE_ORDER_SUCCESS', () => {
        expect(
            burgerReducer({
                ...initialState,
                placeOrderRequest: true
            }, {
            type: types.PLACE_ORDER_SUCCESS,
            payload: { _id: 1 }
        })
        ).toEqual({
            ...initialState,
            orderDetails: { _id: 1 }
        });
    });

    it('should handle SWITCH_TAB', () => {
        expect(
            burgerReducer(initialState, {
            type: types.SWITCH_TAB,
            payload: 'main'
        })
        ).toEqual({
            ...initialState,
            currentTab: 'main'
        });
    });

    it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR', () => {
        expect(
            burgerReducer(initialState, {
            type: types.ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: ingredient
        })
        ).toMatchObject({
            ...initialState,
            constructorFillingIngredients: [ingredient]
        });
    });

    it('should handle MOVE_INGREDIENT_IN_CONSTRUCTOR', () => {
        expect(
            burgerReducer({
                ...initialState,
                constructorFillingIngredients: ingredientsWithGeneratedIds
            }, {
            type: types.MOVE_INGREDIENT_IN_CONSTRUCTOR,
            payload: {
                shiftedGeneratedId: 1,
                droppedIngredient: ingredientWithGeneratedId
            }
        })
        ).toEqual({
            ...initialState,
            constructorFillingIngredients: ingredientsWithGeneratedIds2DroppedToPos0
        });
    });

    it('should handle REMOVE_INGREDIENT_FROM_CONSTRUCTOR', () => {
        expect(
            burgerReducer({
                ...initialState,
                constructorFillingIngredients: ingredientsWithGeneratedIds
            }, {
            type: types.REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: 2
        })
        ).toEqual({
            ...initialState,
            constructorFillingIngredients: ingredientsWithGeneratedIdsRemoved2
        });
    });

});