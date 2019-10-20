import React from "react";
//components
import {Income} from "../Income";
import {
  AddButton,
  SmallEmptyState
} from "../../../global/components/";
//styled-components
import {ListContainer, List, Name} from "./styles";

export function IncomeList({
  type = "",
  incomeListArray = [],
  onAddButtonClick,
  onIncomeClick
}) {
  if (incomeListArray.length === 0) {
    return (
      <ListContainer>
        <Name>{type}</Name>
        <SmallEmptyState
          callToAction="¿Qué tal si agregas uno?"
          message={`Parece que aún no tienes ${type.toLowerCase()}`}
        >
          <AddButton position="static" onClick={onAddButtonClick} />
        </SmallEmptyState>
      </ListContainer>
    );
  }
  return (
    <ListContainer>
      <Name>{type}</Name>
      <List>
        {incomeListArray.map(income => (
          <Income
            key={income._id}
            name={income.name}
            description={income.description}
            price={income.cost}
            onClick={onIncomeClick}
          />
        ))}
      </List>
      <AddButton position="static" onClick={onAddButtonClick} />
    </ListContainer>
  );
}
