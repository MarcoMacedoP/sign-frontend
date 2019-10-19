import React from "react";
import {CircularProgress} from "@material-ui/core/";
import {Container, Message} from "./styles";
export const Loading = ({message}) => {
  return (
    <Container>
      <Message> {message} </Message>
      <CircularProgress size="80px" />
    </Container>
  );
};
