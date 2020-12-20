import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Reducer from "./reducer";

const Store = createStore(Reducer, applyMiddleware(Thunk));

export default Store;
