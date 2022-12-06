import "./TodoList.scss";

import { useSelector } from "react-redux";
import { getTodoList } from "../../redux/slice/todoSlice";
import TodoListItem from "../todoListItem";

function TodoList() {
  const todoList = useSelector(getTodoList);

  return (
    <div className="todo-list-container">
      <ul>
        {todoList?.map((todo) => (
          <li key={todo.id}>
            <TodoListItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
