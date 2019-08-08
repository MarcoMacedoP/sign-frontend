import React from "react";
import { Main, Title, Subtitle, Button } from "./styles";
export const Landing = () => {
  return (
    <Main>
      <Title>Cambia la manera en que trabajas.</Title>
      <Subtitle>
        SIGN es la manera más eficaz de <br /> mejorar la calidad de
        tu trabajo.
      </Subtitle>
      <Button to="/signup">Únete ahora</Button>
    </Main>
  );
};
