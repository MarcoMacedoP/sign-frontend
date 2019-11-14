import React from "react";
//static
import landingImage from "../../../global/static/img/background.svg";
//styled-components
import { Main, Subtitle, Button } from "./styles";
import { H1 } from "../../../global/styles/texts";

export const Landing = () => (
  <Main backgroundImage={landingImage}>
    <H1>Cambia la manera en que trabajas.</H1>
    <Subtitle>
      SIGN es la manera más eficaz de <br /> mejorar la calidad de tu trabajo.
    </Subtitle>
    <Button to="/signup">Únete ahora</Button>
  </Main>
);
