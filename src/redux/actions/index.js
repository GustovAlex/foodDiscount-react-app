import {
    ADD_PRODUCT_TO_CART,
    UPDATE_SELECTED_PRODUCT,
    DELETE_PRODUCT_IN_CART,
} from "../types/index"

export const addProductToCart = (payload) => ({
    type: ADD_PRODUCT_TO_CART,
    payload,
})
export const updateSelectedProduct = (payload) => ({
    type: UPDATE_SELECTED_PRODUCT,
    payload,
})
export const deleteProductInCart = (payload) => ({
    type: DELETE_PRODUCT_IN_CART,
    payload,
})
