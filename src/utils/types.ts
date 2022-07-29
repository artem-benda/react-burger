export interface ILocationState {
    from: string
}

export type TIngredientType = 'main' | 'sauce' | 'bun';

export interface IIngredient {
    _id: string,
    name: string,
    type: TIngredientType,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

export interface IOrderableIngredient extends IIngredient {
    generatedId: string
}

export type TIconType = 'secondary' | 'primary' | 'error' | 'success';

export type TDraggedObject = { id: string };

export type TReorderingObject = { generatedId: string };

export type TUser = { email: string, name: string }

export type TOrderStatus = "created" | "pending" | "done";