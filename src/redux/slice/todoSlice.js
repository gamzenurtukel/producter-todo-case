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
          isDone: false,
        },
        ...state.todoList,
      ];
    },
    completeTodo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
  },
});

export const getTodoList = (state) => state.todos.todoList;
export const { addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
