import { createStore } from "redux";
const initialState = {
  courses: [],
  error: null,
  isLoading: false,
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COURSES":
      return { ...state, courses: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_ISLOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const store = createStore(coursesReducer);
