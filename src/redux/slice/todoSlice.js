import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  selectedTodo: [],
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
    selectedTodos: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          if (todo.isDone === true) {
            state.selectedTodo.push(action.payload);
          } else {
            state.selectedTodo = state.selectedTodo.filter(
              (todo) => todo.id !== action.payload.id
            );
          }
        }
        return todo;
      });
    },
    clearSelectedTodos: (state) => {
      state.todoList.map((todo) => {
        if (todo.isDone === true) {
          todo.isDone = !todo.isDone;
        }
      });
      state.selectedTodo = [];
    },
  },
});

export const getSelectedTodo = (state) => state.todos.selectedTodo;
export const getTodoList = (state) => state.todos.todoList;
export const { addTodo, completeTodo, selectedTodos, clearSelectedTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
