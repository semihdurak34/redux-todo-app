import React from "react";
import { useSelector } from "react-redux";

import SingleTodo from "./SingleTodo";

const ListTodos = () => {
  const appState = useSelector((state) => state);
  console.log(appState);

  return (
    <div>
      {appState.todosState.todos.length === 0 && (
        <p>Henüz bir veri girişi olamdı</p>
      )}
      {appState.todosState.todos.length > 0 && (
        <>
          {appState.todosState.todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
