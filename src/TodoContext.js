import React from "react";
import { createContext, useContext, useReducer } from "react";
import _ from "lodash";

const TodoContext = createContext();

const initialState = {
  items: [],
  values: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      return {
        items: [...state.items, { task: state.values, completed: false }],
        values: "",
      };

    case "ALL-ITEMS":
      return {
        items: [...state.items],
      };

    case "ACTIVE-ITEMS":
      return {
        items: _.filter(...state.items, (item) => item.completed === false),
      };

    case "TODO-ITEMS":
      const { index } = action.payload;
      return {
        items:
          state.items[index].completed === false
            ? (state.items[index].completed = true)
            : (state.items[index].completed = false),
      };

    case "COMPLETED-ITEMS":
      return {
        items: _.filter(...state.items, (item) => item.completed === true),
      };

    case "DELETE":
      return {
        items: _.remove(...state.items, (item) => item.completed === true),
        // items: [...state.items],
      };

    case "VALUE-CHANGE":
      return {
        ...state,
        values: action.payload,
      };

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAddItem = () => {
    dispatch({ type: "ADD-ITEM"});
  };
  const handleAllItems = () => {
    dispatch({ type: "ALL-ITEMS" });
  };

  const handleActiveItems = () => {
    dispatch({ type: "ACTIVE-ITEMS" });
  };

  const handleToggle = () => {
    dispatch({ type: "TODO-ITEMS", payload: {} });
  };

  const handleCompletedItems = () => {
    dispatch({ type: "COMPLETED-ITEMS" });
  };

  const handleDeleteItems = () => {
    dispatch({ type: "DELETE" });
  };

  const handleChange = (e) => {
    dispatch({ type: "VALUE-CHANGE", payload: e.target.value });
  };

  const value = {
    items: state.items,
    values: state.values,
    onAllClicked: handleAllItems,
    onActiveClicked: handleActiveItems,
    onToggleChange: handleToggle,
    onCompletedClicked: handleCompletedItems,
    onDelete: handleDeleteItems,
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
