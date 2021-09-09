import styled from "styled-components";

export const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
  background-color: white;

  @media (min-width: 764px) {
    max-width: 800px;
    box-shadow: 5px 5px 5px #efefef;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin: 10px 0;
`;
export const Todo = styled.label`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 87%;
  min-height: 55px;
  margin: 0;
  padding: 15px 10px;
  background-color: #efedff;
  border-radius: 15px;
`;

export const RemoveButton = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 2px solid lightgrey;
  background-color: white;
  color: lightgrey;
  font-weight: bold;
  cursor: pointer;
`;

export const TaskTitle = styled.p`
  margin: 0;
  margin-left: 35px;
  color: ${(props) => (props.checked ? "#5B25F0" : "#7F2AEC")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  font-weight: bold;
`;
export const TimeStamp = styled.p`
  position: absolute;
  bottom: 0;
  right: 10px;
  color: #5b25f0;
  font-size: 10px;
  text-align: right;
`;
const now = new Date();

export const DueDate = styled.p`
  position: absolute;
  top: 0;
  right: 10px;
  color: ${(props) => (props.due < now ? "red" : "#D1C4F6")};
  font-size: 10px;
  text-align: right;
`;

export const SubmitButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: none;
  background-color: #7f2aec;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;
export const AddTaskButton = styled(SubmitButton)`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  box-shadow: 2px 2px 10px 2px #d1c4f6;

  @media (min-width: 764px) {
    position: absolute;
    bottom: -20px;
    right: 20px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 85%;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #7f2aec;
  padding: 10px;
  font-size: 16px;
  &::placeholder {
    color: #5b25f0;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ClearButton = styled.button`
  width: 90px;
  height: auto;
  border: none;
  background-color: #7f2aec;
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 0;
`;

export const TopInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #d1c4f6;
  font-size: 14px;
`;

export const DueButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background-color: #7f2aec;
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 14px;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 10px 0;
`;

export const DueDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  color: red;
  font-size: 14px;
`;
