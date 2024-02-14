import React from "react";
import _ from "lodash";
import { useTodoContext } from "./TodoContext";

const TodoItems = () => {
  const { onToggleChange, items } = useTodoContext();

  return (
    <div>
      {_.map(items, (item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggleChange(item.id)}
          />
          {item.task}
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
