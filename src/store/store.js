import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { ProductsReducer } from "./Products/ProductsReducer";
// import { CalculatorReducer } from "./Calculator/CalculatorReducer";

const rootReducers = combineReducers({
  products: ProductsReducer,
});

const persistedReducer = persistReducer({ key: "root", storage }, rootReducers);

export const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);
