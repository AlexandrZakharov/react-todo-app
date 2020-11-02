import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([

  ]);
  console.log(todoItems)
  return (
    <div className="App">
      <header>Awesome To-Do App</header>
      <Form
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList
        input={inputText}
        todoItems={todoItems}
        setTodoItems={setTodoItems}
      />
    </div>
  );
}

export default App;
