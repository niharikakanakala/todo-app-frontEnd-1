import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { tasks } from "../reducers/tasks";
import {
  TaskContainer,
  RemoveButton,
  TaskTitle,
  Todo,
  TimeStamp,
  DueDate,
} from "./StyledComponents";
import { Checkbox, CustomCheckbox } from "./CheckboxStyling";

export const Task = ({ text, complete, task }) => {
  const dispatch = useDispatch();
  const check = () => {
    dispatch(tasks.actions.markComplete(task));
  };

  return (
    <TaskContainer>
      <Todo checked={complete}>
        <Checkbox type="checkbox" checked={complete} onChange={check} />
        <CustomCheckbox checked={complete}></CustomCheckbox>
        <TaskTitle checked={complete}>{text}</TaskTitle>
        <TimeStamp>{moment(task.TimeStamp).format("MMM Do")}</TimeStamp>
        <DueDate due={task.due}>
          {task.due ? `Due ${moment(task.due).fromNow()}` : " "}
        </DueDate>
      </Todo>
      <RemoveButton
        onClick={() => dispatch(tasks.actions.removeThisTask(task))}
      >
        X
      </RemoveButton>
    </TaskContainer>
  );
};
