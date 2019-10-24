import styled from "styled-components";
import {whiteColor} from "../../../global/styles/variables";

export const Container = styled.article`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 3rem 1fr;
  gap: 0.5rem;
  padding: 1rem;
`;
export const Header = styled.header`
  grid-column: 1/-1;
  grid-row: 1/2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0 0.5rem 2rem;

  border-bottom: 1px solid ${whiteColor};
`;

export const Info = styled.aside`
  padding: ${props => (props.isShowed ? "0.5rem" : "0")};
  border-left: 1px solid ${whiteColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  width: ${props => (props.isShowed ? "100%" : "0")};
  position: ${props => (props.isShowed ? "static" : "absolute")};
  right: ${props => (props.isShowed ? "0" : "-100vw")};

  transition: width 150ms linear, position 150ms linear;
`;
export const Picture = styled.picture`
  background-color: ${whiteColor};

  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  min-height: 3rem;
  min-width: 3rem;
  margin-bottom: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

export const About = styled.p``;
