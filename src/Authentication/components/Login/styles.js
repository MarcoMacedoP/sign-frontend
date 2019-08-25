//Components
import styled from "styled-components";
//Resources
import LoginImage from "../../utils/images/LoginImage.png";
import { setHeadlineText } from "../../../global/styles/foundations/Texts";
import { whiteColorDark } from "../../../global/styles/variables";
import {
  setHalfScreenContainer,
  setChildContainer
} from "../../../global/styles/foundations/Containers";
export const Container = styled.div`
  ${setHalfScreenContainer()};
  /* position: relative; */
  overflow: hidden;
`;
export const LoginForm = styled.div`
  ${setChildContainer("2/-1", "1/2")};
  display: flex;
  flex-direction: column;
  padding-top: 12.8vh;
  width: 80%;
  & .MuiButtonBase-root {
    width: 100%;
    margin-top: 2rem;
    height: 2.5rem;
  }
  @media (max-width: 800px) {
    justify-content: center;
    padding-top: 0;
    width: 95%;
  }
  @media (max-width: 560px) {
    ${setChildContainer("1/-1", "1/2")};
    padding: 20% 5%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  box-sizing: border-box;
  width: 70%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Picture = styled.picture`
  ${setChildContainer("1/2", "1/2")};
  min-height: 100vh;
  width: 50vw;
  position: relative;
  left: -12%;
  background-image: url(${LoginImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const Title = styled.h1`${setHeadlineText({ size: "2rem" })};`;

export const Signup = styled.span`
  color: ${whiteColorDark};
  margin: 1rem auto;
`;
