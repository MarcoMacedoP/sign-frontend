import React from "react";

//components
import {InfoLayout, Button, ErrorMessage} from "../";
//styled-components
import {H2} from "../../styles/texts";
import {BaseForm} from "../../styles/Forms";
import {Container} from "./styles";
export function AddPage({
  title,
  aboutTitle,
  about,
  children,
  onSubmit,
  isLoading,
  error,
  onErrorClose
}) {
  return (
    <Container>
      <H2>{title}</H2>
      <InfoLayout title={aboutTitle} info={about}>
        <BaseForm onSubmit={onSubmit}>
          {children}
          <ErrorMessage error={error} onClose={onErrorClose} />
          <Button onClick={onSubmit} loading={isLoading}>
            Agregar{" "}
          </Button>
        </BaseForm>
      </InfoLayout>
    </Container>
  );
}
