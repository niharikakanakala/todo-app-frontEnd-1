import React, { useState, useEffect } from "react";

//import { API_BASE_URL } from "../constants/api";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Task } from "./Task";
import { NewTask } from "./NewTask";
import { tasks } from "../reducers/tasks";
import { API_BASE_URL } from "../constants/axios";
import {
  TasksContainer,
  ClearButton,
  TopInfo,
  AddTaskButton,
} from "./StyledComponents";
//import { createStore } from "redux";

const Tasklist = ({ completed, uncompleted, all }) => {
  const listedtasks = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  const completedTasks = listedtasks.filter((task) => task.complete === true);
  const uncompletedTasks = listedtasks.filter(
    (task) => task.complete === false
  );
  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "todos")
      .then((res) => {
        dispatch(tasks.actions.setAll(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showInput = () => {
    setAddTask(!addTask);
  };

  return (
    <TasksContainer>
      <TopInfo>
        Completed: {completedTasks.length}/{listedtasks.length}
        <ClearButton onClick={() => dispatch(tasks.actions.clearTasks())}>
          Clear All
        </ClearButton>
      </TopInfo>
      <NewTask addTask={addTask} setAddTask={setAddTask} />

      {all &&
        listedtasks.map((task) => {
          return (
            <Task
              text={task.task}
              key={task.id}
              complete={task.complete}
              task={task}
            />
          );
        })}

      {completed &&
        completedTasks.map((task) => {
          return (
            <Task
              text={task.task}
              key={task.id}
              complete={task.complete}
              task={task}
            />
          );
        })}

      {uncompleted &&
        uncompletedTasks.map((task) => {
          return (
            <Task
              text={task.task}
              key={task.id}
              complete={task.complete}
              task={task}
            />
          );
        })}

      <AddTaskButton type="submit" onClick={showInput}>
        {addTask ? "-" : "+"}
      </AddTaskButton>
    </TasksContainer>
  );
};

export default Tasklist;
