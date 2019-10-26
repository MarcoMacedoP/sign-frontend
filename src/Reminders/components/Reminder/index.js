import React from "react";
//styled-components
import {Caption} from "../../../global/styles/texts";
import {Card, Content, Title, StyledDate} from "./styles";
//functions
import {compareDateToTodayInDays} from "../../../global/functions/compareDateToTodayInDays";
function Reminder({title, description, date, status}) {
  const daysToDate = compareDateToTodayInDays(new Date(date));
  const dateMessage =
    daysToDate === 0
      ? "Hoy"
      : `En ${daysToDate} ${daysToDate === 1 ? "día" : "días"}`;

  return (
    <Card status={status}>
      <Content>
        <Title>{title}</Title>
        <Caption>{description}</Caption>
        <StyledDate status={status}>{dateMessage}</StyledDate>
      </Content>
    </Card>
  );
}
export default Reminder;
