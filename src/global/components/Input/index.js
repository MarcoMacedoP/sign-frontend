import React, { useState } from "react";
import { Label, InputForm, Container } from "./styles";
/*
    Author : Marco Macedo
    Descripción: Este componente recibe como props: 
                  **name :  usado para el contenido de los labels y el name de los inputs, 
                  el label se relaciona con el input mediante el type.
                  **type:  usado para definir el tipo de input
                  **placeholder: usado para el placeholder el input
    */

export const Input = ({
  name,
  label,
  type,
  placeholder,
  handleChange,
  value
}) => {
  const [ error, setError ] = useState(false);
  const [ active, setActive ] = useState(false);
  return (
    <Container
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}>
      <Label for={name} active={active}>
        {label || name}
      </Label>
      <InputForm
        id={name}
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        active={active}
        onChange={(e) => {
          const { value } = document.getElementById(name);
          if (value.length < 3) {
            setError(true);
          } else {
            setError(false);
          }
          handleChange(e);
        }}
        value={value.name}
        error={error}
      />
    </Container>
  );
};
