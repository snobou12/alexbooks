import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";

import constructorSlice from "./reducers/constructor/constructorSlice";
const rootReducer=combineReducers({
  constructorSlice
})
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });