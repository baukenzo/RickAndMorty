import {applyMiddleware, combineReducers, createStore} from "redux";
import {characters} from "./reducers/characters";
import {todos} from "./reducers/todos";
import { shop } from "./reducers/shop";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    characters,
    todos,
    shop
}), composeWithDevTools(applyMiddleware(thunk)))
