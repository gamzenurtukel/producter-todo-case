import "./Todo.scss";

import TodoForm from "../todoForm";

function Todo() {
  return (
    <div className="todo-container">
      <div className="todo-item">
        <h3>Daily To Do List</h3>
        <TodoForm />
      </div>
    </div>
  );
}

export default Todo;
