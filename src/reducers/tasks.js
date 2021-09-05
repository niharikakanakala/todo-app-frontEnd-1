import { createSlice } from "@reduxjs/toolkit";

const taskList = [
  // {id: 1, text: 'My first todo', complete: true, date: new Date().getTime(), due: null},
  //{id: 2, text: 'My second todo', complete: false, date: new Date().getTime(), due: null},
  ////{id: 3, text: 'My third todo', complete: true, date: new Date().getTime(), due: null},
  // {id: 4, text: 'My fourth todo', complete: false, date: new Date().getTime(), due: null}
];

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
