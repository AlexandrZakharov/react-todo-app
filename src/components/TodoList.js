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

  const completeTodoItem = (id) => {
    props.setTodoItems([
      ...props.todoItems.map((item, i) => {
        return i === id
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
        {props.todoItems.map((item) => (
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
