//Components
import styled from "styled-components";
//Resources
import LoginImage from "../../../global/static/img/auth.svg";
import { whiteColorDark } from "../../../global/styles/variables";
import { appPadding } from "../../../global/styles/variables";
export const Container = styled.div`
  padding: ${appPadding};
  padding-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  overflow: hidden;
`;
export const LoginForm = styled.div`
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
    grid-column: 1/-1;
    padding: 20% 5%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-sizing: border-box;
  width: 100%;
`;
export const Picture = styled.picture`
  grid-column: 2/-1;
  grid-row: 1/-1;

  min-height: 100vh;
  width: 50vw;
  position: relative;
  opacity: 0.7;
  background-image: url(${LoginImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const Signup = styled.span`
  color: ${whiteColorDark};
  margin: 1rem auto;
`;
