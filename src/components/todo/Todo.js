import "./Todo.scss";

import TodoForm from "../todoForm";
import TodoList from "../todoList/TodoList";

function Todo() {
  return (
    <div className="todo-container">
      <div className="todo-item">
        <h3>Daily To Do List</h3>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
