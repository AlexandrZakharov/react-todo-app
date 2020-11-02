import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredItems, setFilteredItems] = useState(todoItems);

  useEffect(
    function filterItems() {
      switch (filterStatus) {
        case "completed":
          setFilteredItems(
            todoItems.filter((item) => item.isCompleted === true)
          );
          break;
        case "uncompleted":
          setFilteredItems(
            todoItems.filter((item) => item.isCompleted === false)
          );
          break;
        default:
          setFilteredItems(todoItems);
      }
    },
    [filterStatus, todoItems]
  );

  return (
    <div className="App">
      <header>Awesome To-Do App</header>
      <Form
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        inputText={inputText}
        setInputText={setInputText}
        setFilterStatus={setFilterStatus}
      />
      <TodoList
        input={inputText}
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        filteredItems={filteredItems}
      />
    </div>
  );
}

export default App;
