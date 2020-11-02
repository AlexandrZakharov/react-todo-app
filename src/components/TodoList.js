import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todoItems.map(item => (<TodoItem item={item} />))}
      </ul>
    </div>
  );
};

export default TodoList;
