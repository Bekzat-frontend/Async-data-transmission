import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
export const getAllThunk = () => {
  return async (dispatch) => {
    dispatch({ type: "SET_ISLOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: true });
    try {
      const response = await fetch("https://b81774bc25d121a3.mokky.dev/users");
      const data = await response.json();
      dispatch({ type: "SET_COURSES", payload: data });
    } catch (error) {
      console.log(error, "error");
      dispatch({
        type: "SET_ERROR",
        payload: error.masseg,
      });
    }
    console.log(error, "error");
  };
};

const initialState = {
  courses: [],
  error: null,
  isLoading: false,
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COURSES":
      return {
        ...state,
        courses: action.payload,
        isLoading: false,
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_ISLOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const store = createStore(coursesReducer, applyMiddleware(thunk));
