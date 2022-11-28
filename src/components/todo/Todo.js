import "./Todo.scss";

import TodoForm from "../todoForm";
import TodoList from "../todoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import {
  clearSelectedTodos,
  getSelectedTodo,
} from "../../redux/slice/todoSlice";

function Todo() {
  const selectedItems = useSelector(getSelectedTodo);
  const dispatch = useDispatch();

  const buttonClearAll = () => {
    dispatch(clearSelectedTodos());
  };

  return (
    <div className="todo-container">
      <div className="todo-item">
        <h3>Daily To Do List</h3>
        <TodoForm />
        <TodoList />
        <div className="item-check-status">
          <p>{selectedItems.length} item selected</p>
          <button className="clear-all" onClick={() => buttonClearAll()}>
            clear all
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
