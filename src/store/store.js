import { createStore } from "react-redux";

const initialState = {
  courses: [],
  error: null,
  isLoading: false,
};

const coursesReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(coursesReducer);
