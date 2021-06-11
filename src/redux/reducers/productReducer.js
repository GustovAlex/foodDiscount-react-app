import { productList } from "../../data/productList"
import {
    ADD_PRODUCT_TO_CART,
    UPDATE_SELECTED_PRODUCT,
    DELETE_PRODUCT_IN_CART,
} from "../types/index"

const defaultState = {
    productList,
    cartList: [],
}
export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cartList: [...state.cartList, action.payload],
            }
        case UPDATE_SELECTED_PRODUCT:
            return {
                ...state,
                cartList: state.cartList.map((product) => {
                    if (product.id === action.payload.id) {
                        return (product = action.payload)
                    }
                    return product
                }),
            }
        case DELETE_PRODUCT_IN_CART:
            return {
                ...state,
                cartList: state.cartList.filter(
                    (product) => product.id !== action.payload
                ),
            }
        default:
            return state
    }
}
