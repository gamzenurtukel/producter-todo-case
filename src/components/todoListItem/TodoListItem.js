import "./TodoListItem.scss";

import { useDispatch } from "react-redux";
import { completeTodo, selectedTodos } from "../../redux/slice/todoSlice";
import classNames from "classnames";

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  const checkOnComplete = () => {
    dispatch(completeTodo(todo.id));
    dispatch(selectedTodos(todo.id));
  };

  return (
    <div className="todo-list-item">
      <label className="container">
        <input type="checkbox" />
        <span className="checkmark" onClick={() => checkOnComplete()}></span>
      </label>
      <p className={classNames({ "todo-is-done": todo.isDone })}>
        {todo.value}
      </p>
    </div>
  );
}

export default TodoListItem;
