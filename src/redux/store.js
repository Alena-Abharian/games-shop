import {combineReducers, createStore} from "redux";
import cartReducer from "./cart-reducer";
import gemesReducer from "./games-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    cart: cartReducer,
    game: gemesReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;