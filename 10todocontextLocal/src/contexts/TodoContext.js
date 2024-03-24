import { createContext, useContext } from "react";
//  creating a ThemeContext
// in this ThemeContext ,when context is initialized it has defualt value.
export const TodoContext = createContext({
  todos: [
    // making todos arr where each todo is an object
    // adding an todo
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// making custom hook
// this we do to not import useContext and ThemeContext instead import only useTheme()
export const useTodo = () => {
  // when you returning the useContext then you need give some context to it
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
