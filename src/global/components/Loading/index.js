import React from "react";
import {CircularProgress} from "@material-ui/core/";
import {Container, Message} from "./styles";
export const Loading = ({message, className, size}) => {
  return (
    <Container className={className}>
      {message && <Message> {message} </Message>}
      <CircularProgress size={size || "80px"} />
    </Container>
  );
};
