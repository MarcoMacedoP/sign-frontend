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
  position: relative;
  overflow: hidden;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-sizing: border-box;
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const Picture = styled.picture`
  ${setChildContainer("1/2", "1/2")};
  height: 100vh;
  position: absolute;
  left: -12%;
  background-image: url(${LoginImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const LoginForm = styled.div`
  ${setChildContainer("2/-1", "1/2")};
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  width: 80%;
  & .MuiButtonBase-root {
    width: 100%;
    margin-top: 2rem;
    height: 2.5rem;
  }
`;
export const Title = styled.h1`${setHeadlineText({ size: "2rem" })};`;

export const Signup = styled.span`
  color: ${whiteColorDark};
  margin: 1rem auto;
`;
