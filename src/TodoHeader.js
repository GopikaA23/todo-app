import React from "react";
import { useTodoContext } from "./TodoContext";

const TodoHeader = () => {
  const { values, onChange, onAdd } = useTodoContext;

  return (
    <div>
      <input
        placeholder="What needs to be done?"
        type="text"
        value={values}
        onChange={onChange}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default TodoHeader;
