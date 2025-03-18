import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./spinner/Spinner";
import { getAllThunk } from "./store/store";

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
    dispatch(getAllThunk());
  }, []);

  return (
    <div>
      {isLoading ? <Spinner /> : ""}
      {error ? <p>Кечириниз курс жок</p> : ""}

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
