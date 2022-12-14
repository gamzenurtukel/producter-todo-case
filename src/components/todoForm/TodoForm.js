import "./TodoForm.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slice/todoSlice";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const addButton = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <form>
      <div className="form-item">
        <input
          placeholder="Add new list item"
          value={inputValue}
          onChange={inputOnChange}
        />
        <button onClick={addButton}>Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
