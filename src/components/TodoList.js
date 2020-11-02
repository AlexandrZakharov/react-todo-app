import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const removeTodoItem = (id) => {
    props.setTodoItems([
      ...props.todoItems.filter((item) => item.id !== id)
    ]);
  };

  const completeTodoItem = (id) => {
    props.setTodoItems([
      ...props.todoItems.map((item) => {
        return item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item;
      }),
    ]);
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredItems.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeTodoItem={removeTodoItem}
            completeTodoItem={completeTodoItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
