import React, { useState, useEffect } from "react";
import {
  Label,
  InputForm,
  Container,
  TextArea,
  StyledErrorSpan
} from "./styles";
import { EMAIL_VALIDATION } from "../../utils/validations";

type inputType = "text" | "email" | "number" | "date" | "textarea";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: inputType;
  onChange: Function | any;
  value: any;
  setError?: Function | any;
  displayError?: boolean;
}
const useErrorOnInput = ({ type, value }: { type: inputType; value: any }) => {
  const [localError, setLocalError] = useState<null | string>(null);
  //use this state just for display the error if the user has cliked the form for first time.
  const [userHasClicked, setUserHasClicked] = useState(false);

  useEffect(() => {
    if (userHasClicked) {
      switch (type) {
        case "email":
          value.match(EMAIL_VALIDATION)
            ? setLocalError(null)
            : setLocalError("El email no es válido");

          break;
        default:
          setLocalError(null);
      }
    }
  }, [value]);

  return { error: localError, setUserHasClicked };
};

export const Input: React.FC<InputProps> = ({
  name,
  label = "",
  type = "text",
  placeholder,
  onChange,
  value,
  displayError = true
}) => {
  const [active, setActive] = useState(false);
  const { error, setUserHasClicked } = useErrorOnInput({ type, value });

  const handleBlur = () => setActive(false);
  const handleFocus = () => {
    setUserHasClicked(true);
    setActive(true);
  };

  return (
    <Container onFocus={handleFocus} onBlur={handleBlur}>
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
          error={displayError && error}
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
          error={displayError && error}
        />
      )}
      {displayError && error && <StyledErrorSpan> {error} </StyledErrorSpan>}
    </Container>
  );
};
