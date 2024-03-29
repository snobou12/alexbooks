import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";
import { setAutoFreeze } from 'immer';
import constructorSlice from "./reducers/constructor/constructorSlice";
import checkoutSlice from "./reducers/checkout/checkoutSlice";
import basketSlice from "./reducers/basket/basketSlice";
import blankSlice from "./reducers/blank/blankSlice";

setAutoFreeze(false);


const rootReducer=combineReducers({
  constructorSlice,
  checkoutSlice,
  basketSlice,
  blankSlice
})
export const store = configureStore({
    reducer: rootReducer,
    
    devTools: process.env.NODE_ENV !== 'production',
  });