import "./App.css";
import Todo from "./ToDo";
import TodoApp from "./TodoApp";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      <div>Todos</div>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

export default App;
