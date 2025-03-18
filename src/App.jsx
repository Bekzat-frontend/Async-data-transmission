import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

async function getAll() {
  try {
    const response = await fetch("https://b81774bc25d121a3.mokky.dev/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
}

function App() {
  const dispatch = useDispatch();
  const { courses, error, isLoading } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    dispatch({ type: "SET_ISLOADING", payload: true });
    getAll()
      .then((data) => {
        dispatch({ type: "SET_COURSES", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err.message });
      })
      .finally(() => {
        dispatch({ type: "SET_ISLOADING", payload: false });
      });
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Kata</p>}

      {courses?.map((items, index) => {
        return (
          <ul key={index}>
            <li>{items.username}</li>
            <li>{items.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
