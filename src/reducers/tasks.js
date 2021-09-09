import { createSlice } from "@reduxjs/toolkit";
// import { API_BASE_URL } from "../constants/api";
// import axios from "axios";

// const tdo = async () => {
//   const response = await axios.get(API_BASE_URL + "todos");
//   return response;
// };

const taskList = [];
//this is the store
export const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: taskList,
  },
  reducers: {
    addTask: (state, action) => {
      const latestTaskId = state.items.map((task) => task.id);
      const { startDate, newTask } = action.payload;
      state.items.push({
        id: state.items.length > 0 ? Math.max(...latestTaskId) + 1 : 1,
        text: newTask,
        complete: false,
        date: new Date().getTime(),
        due: startDate,
      });
    },

    setAll: (state, action) => {
      const items = action.payload;
      state.items = items;
    },

    clearTasks: (state) => {
      state.items.length = 0;
    },

    removeThisTask: (state, action) => {
      const { id } = action.payload;
      const task = state.items.find((t) => t.id === id);
      state.items.splice(state.items.indexOf(task), 1);
    },

    markComplete: (state, action) => {
      const { id } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        task.complete = !task.complete;
      }
    },
  },
});
