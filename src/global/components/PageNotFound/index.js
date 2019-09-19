import React from "react";
import { SmallEmptyState } from "../SmallEmptyState";
import { Container } from "./styles";
import notFoundPageImage from "../../static/img/not_found.svg";
export const PageNotFound = () => (
  <Container>
    <SmallEmptyState
      image={notFoundPageImage}
      message="Ups, parece que esta página no existe"
    />
  </Container>
);
