import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [
        {
          value: action.payload,
          id: nanoid(),
        },
        ...state.todoList,
      ];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
