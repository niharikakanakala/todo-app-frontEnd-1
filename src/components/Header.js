import React from "react";

import {
  HeaderContainer,
  HeaderTitle,
  CategoryTitle,
  FilterButton,
  TitleContainer,
  Buttons,
  CategoryContainer,
} from "./HeaderStyling";

const Header = ({
  completed,
  uncompleted,
  all,
  setCompleted,
  setUncompleted,
  setAll,
}) => {
  const showCompleted = () => {
    setCompleted(true);
    setUncompleted(false);
    setAll(false);
  };

  const showUncompleted = () => {
    setCompleted(false);
    setUncompleted(true);
    setAll(false);
  };

  const showAll = () => {
    setCompleted(false);
    setUncompleted(false);
    setAll(true);
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <HeaderTitle>Todo-App</HeaderTitle>
      </TitleContainer>
      <CategoryContainer>
        <CategoryTitle>NIHARIKA TODOS</CategoryTitle>
        <Buttons>
          <FilterButton active={completed} onClick={showCompleted}>
            Completed
          </FilterButton>
          <FilterButton active={uncompleted} onClick={showUncompleted}>
            Uncompleted
          </FilterButton>
          <FilterButton active={all} onClick={showAll}>
            All
          </FilterButton>
        </Buttons>
      </CategoryContainer>
    </HeaderContainer>
  );
};

export default Header;
