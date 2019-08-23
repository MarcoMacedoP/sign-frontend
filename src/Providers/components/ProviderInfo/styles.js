import styled from "styled-components";
import { setHeadlineText } from "../../../global/styles/foundations/Texts";
import {
  secondaryColor,
  whiteColorLigth
} from "../../../global/styles/variables";

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Navigation = styled.nav`
  width: 100%;
  box-sizing: border-box;
  height: 3rem;
  display: flex;

  justify-content: space-between;
  position: sticky;
  top: 0;
  background: ${whiteColorLigth};
  z-index: 4;
`;

export const Name = styled.h1`
  ${setHeadlineText({ size: "3rem" })};
  margin-bottom: 2.5rem;
`;

export const BiographyContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 2.5rem;
  padding: 0 3rem;
  width: 80%;
`;

export const ProfilePicture = styled.div`
  --size: 9.06vw;
  --min-width: 3rem;
  width: var(--size);
  min-width: var(--min-width);
  height: var(--size);
  min-height: var(--min-width);
  border-radius: 50%;
  overflow: hidden;

  background-color: ${secondaryColor};

  img {
    display: ${(props) => (props.image ? "block" : "none")};
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;
export const Biography = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const ContactInfoContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media only screen and (max-width: 500px) {
    margin-top: 2rem;
    justify-content: flex-start;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  & i {
    padding: 0 0.5rem;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    & p {
      width: 70%;
      text-align: start;
      margin: 0 auto;
    }
  }
`;
