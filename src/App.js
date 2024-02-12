import "./App.css";
import Todo from "./ToDo";
import TodoApp from "./TodoApp";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      {/* <TodoProvider>
        <TodoApp />
      </TodoProvider> */}
      <Todo />
    </div>
  );
}

export default App;
