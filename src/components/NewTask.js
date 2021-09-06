import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import instance from "../constants/axios";

import { tasks } from "../reducers/tasks";
import {
  SubmitButton,
  Input,
  Form,
  DueButton,
  DueDateContainer,
} from "./StyledComponents";

export const NewTask = ({ addTask }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [startDate, setStartDate] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask({ newTask, startDate }));
    setNewTask("");
    setStartDate(null);
  };

  const ExampleCustomInput = ({ onClick }) => (
    <DueButton onClick={onClick}>Add due date</DueButton>
  );

  return (
    <>
      {addTask && (
        <>
          <Form>
            <Input
              type="text"
              onChange={(event) => setNewTask(event.target.value)}
              value={newTask}
              required
              placeholder="+ Add new task"
            />

            <SubmitButton type="submit" onClick={onSubmit}>
              +
            </SubmitButton>
          </Form>
          <DueDateContainer>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
            <span>
              {startDate
                ? `Due ${moment(startDate).format("MMM Do YYYY")}`
                : " "}
            </span>
          </DueDateContainer>
        </>
      )}
    </>
  );
};
