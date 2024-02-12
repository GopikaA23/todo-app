import React, { useState } from "react";
import _ from "lodash";

const Todo = () => {
  const [values, setValues] = useState("");
  const [input, setInput] = useState([]);

  const handleAdd = () => {
    setInput([...input, { task: values, completed: false }]);
    setValues("");
  };

  const handleAll = () => {
    setInput([...input]);
  };

  const handleActive = () => {
    setInput(_.filter(input, (item) => item.completed === false));
  };

  const handleToggle = (index) => {
    input[index].completed === false
      ? (input[index].completed = true)
      : (input[index].completed = false);
   
  };

  const handleCompleted = () => {
    setInput(_.filter(input, (item) => item.completed === true));
  };

  const handleClearCompleted = () => {
    setInput(_.remove(input, (item) => item.completed === true));
    setInput(input);
  };

  const value = _.size(_.filter(input, (item) => item.completed === false));

  return (
    <div>
      <input
        placeholder="What needs to be done?"
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {_.map(input, (value, index) => (
        <div key={index}>
          <input type="checkbox" onChange={() => handleToggle(index)} />
          {value.task}
        </div>
      ))}
      <div>
        {value}items left!
        <button onClick={handleAll}>All</button>
        <button onClick={handleActive}>Active</button>
        <button onClick={handleCompleted}>Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Todo;
