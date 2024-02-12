import React from "react";
import _ from "lodash";
import { useTodoContext } from "./TodoContext";

const TodoItems = () => {
  const { onToggleChange, items } = useTodoContext;
  return _.map(items, (value, index) => (
    <div key={index}>
      <input type="checkbox" onChange={onToggleChange} />
      {value.task}
    </div>
  ));
};

export default TodoItems;
