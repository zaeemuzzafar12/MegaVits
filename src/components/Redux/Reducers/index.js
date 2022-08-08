import { combineReducers } from "redux";
import  {CartReducers}  from "../Reducers/CartReducers";

const root = combineReducers({
    carts : CartReducers
})

export default root