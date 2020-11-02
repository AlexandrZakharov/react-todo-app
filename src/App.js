import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredItems, setFilteredItems] = useState(todoItems);

  useEffect(() => {
    getLocalItems();
  }, []);

  useEffect(() => {
    filterItems();
    saveLocalItems();
  }, [filterStatus, todoItems]);

  const filterItems = () => {
    switch (filterStatus) {
      case "completed":
        setFilteredItems(todoItems.filter((item) => item.isCompleted === true));
        break;
      case "uncompleted":
        setFilteredItems(
          todoItems.filter((item) => item.isCompleted === false)
        );
        break;
      default:
        setFilteredItems(todoItems);
    }
  };

  const saveLocalItems = () => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  };

  const getLocalItems = () => {
    if (localStorage.getItem("todoItems") === null) {
      localStorage.setItem("todoItems", JSON.stringify([]));
    } else {
      let todoItemLocal = JSON.parse(localStorage.getItem('todoItems'));
      setTodoItems(todoItemLocal)
    }
  };

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
