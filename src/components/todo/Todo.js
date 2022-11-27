import "./Todo.scss";

import TodoForm from "../todoForm";
import TodoList from "../todoList/TodoList";
import { useSelector } from "react-redux";
import { getSelectedTodo } from "../../redux/slice/todoSlice";

function Todo() {
  const selectedItems = useSelector(getSelectedTodo);

  console.log("selected", selectedItems.length);

  return (
    <div className="todo-container">
      <div className="todo-item">
        <h3>Daily To Do List</h3>
        <TodoForm />
        <TodoList />
        <div className="item-check-status">
          <p>{selectedItems.length} item selected</p>
          <p>clear all</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
