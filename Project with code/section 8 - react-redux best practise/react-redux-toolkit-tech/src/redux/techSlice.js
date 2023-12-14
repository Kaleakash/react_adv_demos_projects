import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";

/* Actions */

export const likeForTech = createAction("tech/hit", (tid) => {
  return { payload: { id: tid } };
});

export const loadTechs = createAsyncThunk("tech/load", async () => {
  const response = await fetch("http://localhost:3001/technologies");

  const technologies = await response.json();

  return { technologies };
});

/* Selectors */

const selectTechState = (rootState) => rootState.technologies;

export const selectTechList = (rootState) => selectTechState(rootState).technologies;
export const selectTechLoading = (rootState) => selectTechState(rootState).techLoading;
export const selectTechLoadError = (rootState) => selectTechState(rootState).error;

/* Reducer */

const initialState = {
  technologies: [],
};

const techReducer = createReducer(initialState, {
  [likeForTech]: (state, action) => {
    const techHit = state.technologies.find(
      (tech) => tech.id === action.payload.id
    );

    techHit.like += 1;
  },

  [loadTechs.pending]: (state) => {
    state.techLoading = true;
  },

  [loadTechs.fulfilled]: (state, action) => {
    state.techLoading = false;
    state.technologies = action.payload.technologies;
  },

  [loadTechs.rejected]: (state) => {
    state.techLoading = false;
    state.error =
      "Error, something went wrong. Please check db.json file running or not";
  },
});

export default techReducer;
