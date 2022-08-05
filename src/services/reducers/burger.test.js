import { burgerReducer } from './burger';
import * as types from '../constants/burger';
import { ingredient, ingredients, ingredientsWithGeneratedIds, ingredientsWithGeneratedIds2DroppedToPos0, ingredientsWithGeneratedIdsRemoved2, ingredientWithGeneratedId } from '../../utils/test-data'

describe('burger reducer', () => {
    it('should return the initial state', () => {
        expect(burgerReducer(undefined, {})).toEqual({
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
        });
    });

    it('should handle GET_BURGER_INGREDIENTS_REQUEST', () => {
        expect(
            burgerReducer({
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
            }, {
            type: types.GET_BURGER_INGREDIENTS_REQUEST
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: true,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle GET_BURGER_INGREDIENTS_FAILED', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
                ingredientDetails: null,
                orderDetails: null,
            
                getIngredientsRequest: true,
                getIngredientsFailed: false,
            
                placeOrderRequest: false,
                placeOrderFailed: false
            }, {
            type: types.GET_BURGER_INGREDIENTS_FAILED
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: true,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle GET_BURGER_INGREDIENTS_SUCCESS', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
                ingredientDetails: null,
                orderDetails: null,
            
                getIngredientsRequest: true,
                getIngredientsFailed: false,
            
                placeOrderRequest: false,
                placeOrderFailed: false
            }, {
            type: types.GET_BURGER_INGREDIENTS_SUCCESS,
            payload: ingredients
        })
        ).toEqual({
            availableIngredients: ingredients,
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle SHOW_INGREDIENT_DETAILS', () => {
        expect(
            burgerReducer({
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
            }, {
            type: types.SHOW_INGREDIENT_DETAILS,
            payload: ingredient
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: ingredient,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle HIDE_INGREDIENT_DETAILS', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
                ingredientDetails: ingredient,
                orderDetails: null,
            
                getIngredientsRequest: false,
                getIngredientsFailed: false,
            
                placeOrderRequest: false,
                placeOrderFailed: false
            }, {
            type: types.HIDE_INGREDIENT_DETAILS
        })
        ).toEqual({
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
        });
    });

    it('should handle HIDE_ORDER_DETAILS', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
                ingredientDetails: null,
                orderDetails: { _id: 1 },
            
                getIngredientsRequest: false,
                getIngredientsFailed: false,
            
                placeOrderRequest: false,
                placeOrderFailed: false
            }, {
            type: types.HIDE_ORDER_DETAILS
        })
        ).toEqual({
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
        });
    });

    it('should handle PLACE_ORDER_REQUEST', () => {
        expect(
            burgerReducer({
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
            }, {
            type: types.PLACE_ORDER_REQUEST
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: true,
            placeOrderFailed: false
        });
    });

    it('should handle PLACE_ORDER_FAILED', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
                ingredientDetails: null,
                orderDetails: null,
            
                getIngredientsRequest: false,
                getIngredientsFailed: false,
            
                placeOrderRequest: true,
                placeOrderFailed: false
            }, {
            type: types.PLACE_ORDER_FAILED
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: true
        });
    });

    it('should handle PLACE_ORDER_SUCCESS', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: [],
                ingredientDetails: null,
                orderDetails: null,
            
                getIngredientsRequest: false,
                getIngredientsFailed: false,
            
                placeOrderRequest: true,
                placeOrderFailed: false
            }, {
            type: types.PLACE_ORDER_SUCCESS,
            payload: { _id: 1 }
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: { _id: 1 },
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle SWITCH_TAB', () => {
        expect(
            burgerReducer({
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
            }, {
            type: types.SWITCH_TAB,
            payload: 'main'
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'main',
            constructorBunIngredient: null,
            constructorFillingIngredients: [],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR', () => {
        expect(
            burgerReducer({
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
            }, {
            type: types.ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: ingredient
        })
        ).toMatchObject({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: [ingredient],
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle MOVE_INGREDIENT_IN_CONSTRUCTOR', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: ingredientsWithGeneratedIds,
                ingredientDetails: null,
                orderDetails: null,
            
                getIngredientsRequest: false,
                getIngredientsFailed: false,
            
                placeOrderRequest: false,
                placeOrderFailed: false
            }, {
            type: types.MOVE_INGREDIENT_IN_CONSTRUCTOR,
            payload: {
                shiftedGeneratedId: 1,
                droppedIngredient: ingredientWithGeneratedId
            }
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: ingredientsWithGeneratedIds2DroppedToPos0,
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

    it('should handle REMOVE_INGREDIENT_FROM_CONSTRUCTOR', () => {
        expect(
            burgerReducer({
                availableIngredients: [],
                currentTab: 'bun',
                constructorBunIngredient: null,
                constructorFillingIngredients: ingredientsWithGeneratedIds,
                ingredientDetails: null,
                orderDetails: null,
            
                getIngredientsRequest: false,
                getIngredientsFailed: false,
            
                placeOrderRequest: false,
                placeOrderFailed: false
            }, {
            type: types.REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: 2
        })
        ).toEqual({
            availableIngredients: [],
            currentTab: 'bun',
            constructorBunIngredient: null,
            constructorFillingIngredients: ingredientsWithGeneratedIdsRemoved2,
            ingredientDetails: null,
            orderDetails: null,
        
            getIngredientsRequest: false,
            getIngredientsFailed: false,
        
            placeOrderRequest: false,
            placeOrderFailed: false
        });
    });

});