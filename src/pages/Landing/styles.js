import styled from "styled-components";
import {
  whiteColorLigth,
  blackColorLigth
} from "../../styles/variables";
import landingImage from "../images/landing-page-image.svg";
import { setHeadlineText } from "../../styles/functions/texts";
import { Button as BaseButton } from "../../styles/foundations/Buttons";
export const Main = styled.main`
  box-sizing: border-box;
  background-color: ${whiteColorLigth};
  padding: 22vh 6.25vw;
  min-height: 100vh;
  display flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${landingImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;
export const Button = styled(BaseButton)`
margin-top: 3rem;
min-width: 300px;
    background-color: red;
  background-image: linear-gradient(
    269deg,
    #ca50bb,
    #c55abd 24%,
    #90ced8 92%,
    #86e5dd
  );
  min-height: 50px;
`;
export const Title = styled.h1`
  white-space: nowrap;
  ${setHeadlineText({ size: "3rem" })};
`;
export const Subtitle = styled.h2`
  margin-top: 2rem;
  ${setHeadlineText({
    size   : "1.5rem",
    color  : blackColorLigth,
    weigth : "500"
  })};
`;
