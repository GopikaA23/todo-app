import React from "react";
import _ from "lodash";
import "./TodoApp.css";
import { useTodoContext } from "./TodoContext";

const TodoFooter = () => {
  const { items, onActiveClicked, onAllClicked, onCompletedClicked, onDelete } =
    useTodoContext();
  return (
    <div>
      {_.size(_.filter(items, (item) => !item.completed))} items left!
      <button onClick={onAllClicked}>All</button>
      <button onClick={onActiveClicked}>Active</button>
      <button onClick={onCompletedClicked}>Completed</button>
      <button onClick={onDelete}>Clear Completed</button>
    </div>
  );
};

export default TodoFooter;
