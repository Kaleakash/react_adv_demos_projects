import { configureStore } from "@reduxjs/toolkit";
import techReducer from "./techSlice";

const store = configureStore({
  reducer: { technologies: techReducer },
});

export default store;
