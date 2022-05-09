import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";

import constructorSlice from "./reducers/constructor/constructorSlice";
import checkoutSlice from "./reducers/checkout/checkoutSlice";
import basketSlice from "./reducers/basket/basketSlice";


const rootReducer=combineReducers({
  constructorSlice,
  checkoutSlice,
  basketSlice
})
export const store = configureStore({
    reducer: rootReducer,
    
    devTools: process.env.NODE_ENV !== 'production',
  });