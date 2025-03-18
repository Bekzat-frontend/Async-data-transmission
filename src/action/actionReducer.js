export const setLoading = () => ({ type: "SET_ISLOADING", payload: true });
export const setCourses = (data) => ({ type: "SET_COURSES", payload: data });
export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});
