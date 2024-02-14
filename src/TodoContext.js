import React from "react";
import { createContext, useContext, useReducer } from "react";
import _ from "lodash";

const TodoContext = createContext();
const initialState = {
  items: [],
  values: "",
  filter: "all",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      if (!state.values.trim()) {
        return state;
      }
      return {
        ...state,
        items: [
          ...state.items,
          { id: _.size(state.items) + 1, task: state.values, completed: false },
        ],
        values: "",
      };
    case "SET-FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "VALUE-CHANGE":
      return {
        ...state,
        values: action.payload,
      };
    case "TODO-ITEMS":
      const { id } = action.payload;
      return {
        ...state,
        items: _.map(state.items, (item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ),
      };
    case "CLEAR-COMPLETED":
      return {
        ...state,
        items: _.filter(state.items, (item) => !item.completed),
      };
    default:
      return state;
  }
};
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleChange = (e) => {
    dispatch({ type: "VALUE-CHANGE", payload: e.target.value });
  };
  const handleAddItem = () => {
    dispatch({ type: "ADD-ITEM" });
  };
  const handleFilter = (filter) => {
    dispatch({ type: "SET-FILTER", payload: filter });
  };
  const handleToggle = (id) => {
    dispatch({ type: "TODO-ITEMS", payload: { id } });
  };
  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR-COMPLETED" });
  };
  const value = {
    items: (() => {
      if (state.filter === "active") {
        return state.items.filter((item) => !item.completed);
      } else if (state.filter === "completed") {
        return state.items.filter((item) => item.completed);
      }
      return state.items;
    })(),
    values: state.values,
    filter: state.filter,
    onAllClicked: () => handleFilter("all"),
    onActiveClicked: () => handleFilter("active"),
    onToggleChange: handleToggle,
    onCompletedClicked: () => handleFilter("completed"),
    onDelete: handleClearCompleted,
    onAdd: handleAddItem,
    onChange: handleChange,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw Error("");
  return context;
};
export { TodoContext, TodoProvider };
