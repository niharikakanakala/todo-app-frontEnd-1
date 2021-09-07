import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { API_BASE_URL } from "../constants/axios";

import { tasks } from "../reducers/tasks";
import {
  SubmitButton,
  Input,
  Form,
  DueButton,
  DueDateContainer,
} from "./StyledComponents";
import axios from "axios";

export const NewTask = ({ addTask }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [startDate, setStartDate] = useState();
  const [data, setData] = useState(null);

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(tasks.actions.addTask({ newTask, startDate }));
  //   setNewTask("");
  //   setStartDate(null);
  // };
  const createTodo = (e) => {
    e.preventDefault();
    dispatch(tasks.actions.addTask({ newTask, startDate }));
    setNewTask("");
    setStartDate(null);
    console.log(data);
    const payload = {
      task: newTask,
    };
    axios
      .post(API_BASE_URL + "todo", payload)
      .then((res) => {
        setData(res.data);
        setNewTask("");
        setStartDate(null);
      })
      .catch((err) => {
        console.log(err);
      });
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

            <SubmitButton type="submit" onClick={createTodo}>
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
