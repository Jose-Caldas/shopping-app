import { createStore, combineReducers } from "redux";
import calculatorReducer from "./calculator/Calculator.reducer";

const rootReducers = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(rootReducers);

export default store;
