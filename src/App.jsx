import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./spinner/Spinner";
import { getAllThunk } from "./store/store";
import { getAllById } from "./store/store";

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
  const { courses, error, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllThunk());
  }, []);
  function getAllByIdHandle(id) {
    dispatch(getAllById(id));
  }
  return (
    <div>
      {isLoading ? <Spinner /> : ""}
      {error ? <p>Кечириниз курс жок</p> : ""}

      {courses?.map((items, index) => {
        return (
          <ul key={index}>
            <li>{items.username}</li>
            <li>{items.name}</li>
            <button onClick={() => getAllByIdHandle(items.id)}> id</button>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
