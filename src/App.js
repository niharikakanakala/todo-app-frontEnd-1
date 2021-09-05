import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import Header from "./components/Header";
import Tasklist from "./components/Tasklist";
import { tasks } from "./reducers/tasks";

const reducer = combineReducers({ tasks: tasks.reducer });

const store = configureStore({ reducer });

export const App = () => {
  const [completed, setCompleted] = useState(false);
  const [uncompleted, setUncompleted] = useState(false);
  const [all, setAll] = useState(true);

  return (
    <Provider store={store}>
      <Container>
        <Header
          completed={completed}
          uncompleted={uncompleted}
          all={all}
          setCompleted={setCompleted}
          setUncompleted={setUncompleted}
          setAll={setAll}
        />
        <Tasklist completed={completed} uncompleted={uncompleted} all={all} />
      </Container>
    </Provider>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
