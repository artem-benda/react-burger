import { IIngredient, IOrderableIngredient, TIngredientType, TOrderStatus, TUser } from '../../utils/types';

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

export interface IShowIngredientDetailsAction {
    readonly type: typeof SHOW_INGREDIENT_DETAILS;
    readonly payload: IIngredient;
}

export interface IHideIngredientDetailsAction {
    readonly type: typeof HIDE_INGREDIENT_DETAILS;
}

export interface IHideOrderDetailsAction {
    readonly type: typeof HIDE_ORDER_DETAILS;
}

export interface ISwitchTabAction {
    readonly type: typeof SWITCH_TAB;
    readonly payload: TIngredientType;
}

export interface IAddIngredientToConstructorAction {
    readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
    readonly payload: IIngredient;
}

export interface IRemoveIngredientFromConstructorAction {
    readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
    readonly payload: string;
}

export interface IMoveIngredientInConstructorAction {
    readonly type: typeof MOVE_INGREDIENT_IN_CONSTRUCTOR;
    readonly payload: { 
        shiftedGeneratedId: string,
        droppedIngredient: IOrderableIngredient
    };
}

export interface IGetBurgerIngredientsRequestAction {
    readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST;
}

export interface IGetBurgerIngredientsSuccessAction {
    readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
    readonly payload: ReadonlyArray<IIngredient>;
}

export interface IGetBurgerIngredientsFailedAction {
    readonly type: typeof GET_BURGER_INGREDIENTS_FAILED;
}

export interface IPlaceOrderRequestAction {
    readonly type: typeof PLACE_ORDER_REQUEST;
    readonly payload: ReadonlyArray<string>;
}

export interface IPlaceOrderSuccessAction {
    readonly type: typeof PLACE_ORDER_SUCCESS;
    readonly payload: IOrder;
}

export interface IPlaceOrderFailedAction {
    readonly type: typeof PLACE_ORDER_FAILED;
}

export type TBurgerActionTypes =
    IShowIngredientDetailsAction |
    IHideIngredientDetailsAction |
    IHideOrderDetailsAction |
    ISwitchTabAction |
    IAddIngredientToConstructorAction |
    IRemoveIngredientFromConstructorAction |
    IMoveIngredientInConstructorAction |
    IGetBurgerIngredientsRequestAction |
    IGetBurgerIngredientsSuccessAction |
    IGetBurgerIngredientsFailedAction |
    IPlaceOrderRequestAction |
    IPlaceOrderSuccessAction |
    IPlaceOrderFailedAction;

export interface IOwner extends TUser {
    createdAt: string;
    updatedAt: string;
}

export interface IOrder {
    ingredients: Array<string>;
    _id: string;
    owner: IOwner;
    status: TOrderStatus;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number; 
}
