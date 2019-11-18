import React, { useState } from "react";
import { Label, InputForm, Container, TextArea } from "./styles";
/**
    @author : Marco Macedo
    @description: Este componente recibe como props: 
                  **name :  usado para el contenido de los labels y el name de los inputs, 
                  el label se relaciona con el input mediante el type.
                  **type:  usado para definir el tipo de input
                  **placeholder: usado para el placeholder el input
    */

export const Input = ({
  name,
  label = "",
  type = "text",
  placeholder,
  onChange,
  value = "",
  error = null
}) => {
  const [active, setActive] = useState(false);
  return (
    <Container onFocus={() => setActive(true)} onBlur={() => setActive(false)}>
      <Label htmlFor={name} active={active}>
        {label || name}
      </Label>
      {type === "textarea" ? (
        <TextArea
          name={name}
          placeholder={placeholder}
          active={active}
          onChange={onChange}
          value={value}
          error={error}
        />
      ) : (
        <InputForm
          defaultValue={value}
          id={name}
          type={type}
          placeholder={placeholder}
          name={name}
          active={active}
          onChange={onChange}
          value={value.name}
          error={error}
        />
      )}
    </Container>
  );
};
