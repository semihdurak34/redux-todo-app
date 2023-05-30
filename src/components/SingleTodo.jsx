import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import "../assets/global.css";

const SingleTodo = ({ todo }) => {
  const [update, setUpdate] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    // validation yapılabilir
    if (updatedText === "") {
      alert("Can not be left blank");
      return;
    }
    var updatedCase = {
      ...todo,
      text: updatedText,
    };
    dispatch({ type: actionTypes.TODO_UPDATE, payload: updatedCase });
    setUpdate(false);
  };

  return (
    <>
      <div>
        <h1 className={todo.isDone ? "undone" : "done"}>{todo.text}</h1>
        {update && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={updatedText}
              onChange={(event) => setUpdatedText(event.target.value)}
            />
            <button
              type="text"
              onClick={() => {
                setUpdate(false);
                setUpdatedText(todo.text);
              }}
            >
              Cancel
            </button>
            <button type="submit">Save</button>
          </form>
        )}

        <button
          onClick={() =>
            dispatch({ type: actionTypes.TODO_DELETE, payload: todo.id })
          }
        >
          Delete
        </button>
        <button
          onClick={() =>
            dispatch({ type: actionTypes.TODO_DONE, payload: todo.id })
          }
        >
          {todo.isDone === true ? "Undone" : "Done"}
        </button>
        <button onClick={() => setUpdate(true)}>Update</button>
        <hr />
      </div>
    </>
  );
};

export default SingleTodo;
