import "./TodoForm.scss";

import { useState } from "react";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const addButton = (e) => {
    e.preventDefault();
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
