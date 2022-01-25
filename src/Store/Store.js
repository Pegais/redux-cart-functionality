import { createStore } from "redux";
import rootReducer from "../Reducers/Index";
// import CartReducer from '../Reducers/CartReducer'

const store = createStore(rootReducer);
export default store;