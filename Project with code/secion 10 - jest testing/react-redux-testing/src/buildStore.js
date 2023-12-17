import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";

export default function buildStore() {
  const store = configureStore({
    reducer: charactersSlice.reducer,
    preloadedState: ["Michael Scott", "Dwight Schrute", "Jim Halpert"]
  });
  return store;
}
