import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const removeTodoItem = (id) => {
    props.setTodoItems([
      ...props.todoItems
        .filter((item) => item.id !== id)
        .map((item, i) => {
          return {
            ...item,
            id: i,
          };
        }),
    ]);
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todoItems.map((item) => (
          <TodoItem key={item.id} item={item} removeTodoItem={removeTodoItem} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
