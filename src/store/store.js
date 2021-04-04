import { createStore, combineReducers } from "redux";
import { ProductsReducer } from "./Products/ProductsReducer";
// import { CalculatorReducer } from "./Calculator/CalculatorReducer";

const rootReducers = combineReducers({
  products: ProductsReducer,
});

const store = createStore(rootReducers);

export default store;
