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
      <label className="check-box">
        <input type="checkbox" />
        <span
          className={classNames("check-mark", {
            "is-done-check": todo.isDone,
          })}
          onClick={() => checkOnComplete()}
        ></span>
      </label>
      <p className={classNames({ "todo-is-done": todo.isDone })}>
        {todo.value}
      </p>
    </div>
  );
}

export default TodoListItem;
