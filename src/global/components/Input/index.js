import React from "react";
import { Label, InputForm, Container } from "./styles";
/*
    Author : Marco Macedo
    Descripción: Este componente recibe como props: 
                  **name :  usado para el contenido de los labels y el name de los inputs, 
                  el label se relaciona con el input mediante el type.
                  **type:  usado para definir el tipo de input
                  **placeholder: usado para el placeholder el input
    */

export const Input = ({ name, type, placeholder }) => (
  <Container>
    <Label for={name}>{name}</Label>
    <InputForm
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  </Container>
);
