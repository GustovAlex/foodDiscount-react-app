import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import productReducer from "./productReducer"

const rootReduser = combineReducers({
    data: productReducer,
})

export const store = createStore(rootReduser, composeWithDevTools())
