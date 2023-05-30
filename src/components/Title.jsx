import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const appState = useSelector((state) => state);
  return (
    <div>
      <h1>TODO APP</h1>
      <p>Kayıtlı todo sayısı:{appState.todosState.todos.length}</p>
      <p>
        Yapılanlar:{" "}
        {
          appState.todosState.todos.filter((item) => item.isDone === true)
            .length
        }
      </p>
      <p>
        Yapılmayanlar:{" "}
        {
          appState.todosState.todos.filter((item) => item.isDone === false)
            .length
        }{" "}
      </p>
    </div>
  );
};

export default Title;
