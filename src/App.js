import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([
    {text: 'lolkek', isCompleted: false},
    {text: '22424', isCompleted: false},
    {text: 'lol42kek', isCompleted: true},
    {text: '111', isCompleted: false},
  ]);

  return (
    <div className="App">
      <header>Awesome To-Do App</header>
      <Form
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList input={inputText} todoItems={todoItems} />
    </div>
  );
}

export default App;
