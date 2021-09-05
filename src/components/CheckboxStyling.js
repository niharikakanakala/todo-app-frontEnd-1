import styled from "styled-components";

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
`;

export const CustomCheckbox = styled.span`
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: ${(props) => (props.checked ? "#7F2AEC" : "#EFEDFF")};
  border: 2px solid #7f2aec;
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;

  :hover {
    background-color: ${(props) => (props.checked ? "#7F2AEC" : "#D1C4F6")};
  }

  :after {
    content: "";
    position: absolute;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    top: 3px;
    left: 6px;
    display: ${(props) => (props.checked ? "block" : "none")};
  }
`;
