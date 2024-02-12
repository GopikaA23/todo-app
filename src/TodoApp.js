import React from "react";
import TodoHeader from "./TodoHeader";
import TodoItems from "./TodoItems";
import TodoFooter from "./TodoFooter";

const TodoApp = () => {
  return (
    <div>
      <TodoHeader />
      <TodoItems />
      <TodoFooter />
    </div>
  );
};

export default TodoApp;
