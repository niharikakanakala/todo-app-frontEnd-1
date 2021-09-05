import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #7f2aec;
  color: white;
  padding: 20px 0;

  @media (min-width: 764px) {
    max-width: 800px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-top: 20px;
  }
`;
export const TitleContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 100%;
  height: auto;
`;

export const HeaderTitle = styled.h1`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 400;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

export const CategoryTitle = styled.h1`
  margin: 20px 10px;
  font-size: 30px;
  font-weight: 700;
`;
export const Buttons = styled.div``;

export const FilterButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background-color: #7f2aec;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#fff" : "#D1C4F6")};
  border-radius: 15px;
  cursor: pointer;
  margin: 0 10px;
`;
