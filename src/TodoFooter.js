import React from "react";
import { useTodoContext } from "./TodoContext";

const TableFooter = () => {
  const { onAllClicked, onActiveClicked, onCompletedClicked, onDelete } =
    useTodoContext;
  return (
    <div>
      {/* {value}items left! */}
      <button onClick={onAllClicked}>All</button>
      <button onClick={onActiveClicked}>Active</button>
      <button onClick={onCompletedClicked}>Completed</button>
      <button onClick={onDelete}>Clear Completed</button>
    </div>
  );
};

export default TableFooter;
