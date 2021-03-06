const TodoItem = (props) => {

  return (
    <div className={props.item.isCompleted ? 'todo completed': 'todo'} >
      <li className="todo-item">{props.item.text}</li>
      <button className="complete-btn" onClick={() => props.completeTodoItem(props.item.id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => props.removeTodoItem(props.item.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;