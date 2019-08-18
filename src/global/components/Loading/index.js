import React from "react";
import { CircularProgress } from "@material-ui/core/";
import { Container } from "./styles";
export const Loading = () => {
  return (
    <Container>
      <CircularProgress color="red" size="80px" />
    </Container>
  );
};
