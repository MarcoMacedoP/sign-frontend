import React from "react";

//components
import {InfoLayout, Button} from "../";
//styled-components
import {H2} from "../../styles/texts";
import {BaseForm} from "../../styles/Forms";
import {Container} from "./styles";
export function AddPage({
  title,
  aboutTitle,
  about,
  children,
  onSubmit
}) {
  return (
    <Container>
      <H2>{title}</H2>
      <InfoLayout title={aboutTitle} info={about}>
        <BaseForm onSubmit={onSubmit}>
          {children}
          <Button onClick={onSubmit}>Agregar </Button>
        </BaseForm>
      </InfoLayout>
    </Container>
  );
}
