import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import ListTodos from "./components/ListTodos";
import Title from "./components/Title";





function App() {
  return (
    <div className="App">
      <Title/>
      <AddTodoForm/>
      <ListTodos/>
    </div>
  );
}

export default App;
