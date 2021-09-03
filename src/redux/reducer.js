import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [{ id: 1, task: "wake up", completed: false }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos,
      };

    case types.REMOVE_TODO:
      const filterTodo = state.todos.filter(
        (niha) => niha.id !== action.payload.id
      );
      return {
        ...state,
        todos: filterTodo,
      };

    case types.UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };

    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map((niha) =>
        niha.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : niha
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
