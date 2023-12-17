import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: [],
  reducers: {
    add(state, action) {
      state.unshift(action.payload);
    },
    remove(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    }
  }
});

export default charactersSlice;
