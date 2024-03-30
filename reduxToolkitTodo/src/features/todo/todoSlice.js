// we used two method to create a slice 1.createSlice
// nonoid: it generate unique id's.
import { createSlice, nanoid } from "@reduxjs/toolkit";

//  2. important thing in store is initialState where how the store is looking like whether it is empty or there is value in store. so for that we making initialState.
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

// how to making slice.
// slice is just like reducer bigger version.
// reducer is funtionality.

export const todoSlice = createSlice({
  // name of slices
  name: "todo",
  // initial state of slice
  initialState,
  // Making a reducer
  reducers: {
    // in reducer we have properties and functions
    addTodo: (state, action) => {
      // making a todo
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // push todo in state
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // state give the current state of state
      // action give the data pass
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// two part of todoSlice to export
// export individual reducer
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
