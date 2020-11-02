const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const addNewTodoItem = (e) => {
    e.preventDefault();
    props.setTodoItems([
      ...props.todoItems,
      {
        id: props.todoItems.length,
        text: props.inputText,
        isCompleted: false,
      }
    ]);
    props.setInputText("");
  };

  return (
    <form onSubmit={addNewTodoItem}>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={props.inputText}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
