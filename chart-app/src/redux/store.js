import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./chartSlice"; // Import the reducer

const store = configureStore({
  reducer: {
    charts: chartReducer, // Set chartReducer as the state for 'charts'
  },
});

export default store;
