// Action Type

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};