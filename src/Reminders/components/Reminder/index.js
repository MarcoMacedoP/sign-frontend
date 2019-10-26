import React from "react";
//styled-components
import {Caption} from "../../../global/styles/texts";
import {Card, Content, Title, StyledDate} from "./styles";
//functions
import {compareDateToTodayInDays} from "../../../global/functions/compareDateToTodayInDays";
function Reminder({title, description, date, status}) {
  const daysToDate = compareDateToTodayInDays(new Date(date));

  return (
    <Card status={status}>
      <Content>
        <Title>{title}</Title>
        <Caption>{description}</Caption>
        <StyledDate status={status}>En {daysToDate} días </StyledDate>
      </Content>
    </Card>
  );
}
export default Reminder;
