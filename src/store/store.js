import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { setCourses } from "../action/actionReducer";
import { setError } from "../action/actionReducer";
import { setLoading } from "../action/actionReducer";

const initialState = {
  courses: [],
  error: null,
  isLoading: false,
};

export const getAllThunk = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await fetch("https://b81774bc25d121a3.mokky.dev/users");
      const data = await response.json();
      dispatch(setCourses(data));
    } catch (error) {
      console.log(error, "error");
      dispatch(setError(error.message));
    }
  };
};

export const getAllById = (id) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await fetch(
        `https://b81774bc25d121a3.mokky.dev/users/${id}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error, "error");
      dispatch(setError(error.message));
    }
  };
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
      return { ...state, error: action.payload, isLoading: false };
    case "SET_ISLOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export const store = createStore(coursesReducer, applyMiddleware(thunk));
