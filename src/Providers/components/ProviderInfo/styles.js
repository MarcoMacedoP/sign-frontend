import styled from "styled-components";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";
import { setHeadlineText } from "../../../global/styles/foundations/Texts";
import {
  secondaryColor,
  appPadding
} from "../../../global/styles/variables";

export const Container = styled.div`
  padding: ${appPadding};
  position: relative;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BackIcon = styled(MaterialIcon)`
 align-self: flex-start;
 `;

export const Name = styled.h1`
  ${setHeadlineText({ size: "3rem" })};
  margin-bottom: 2.5rem;
`;
export const MoreIcon = styled(MaterialIcon)`
    align-self: flex-end;
    position: absolute;
`;
export const BiographyContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 2.5rem;
  padding: 0 3rem;
`;

export const ProfilePicture = styled.div`
  --size: 9.06vw;
  --min-width: 3rem;
  width: var(--size);
  min-width: var(--min-width);
  height: var(--size);
  min-height: var(--min-width);
  border-radius: 50%;

  background-color: ${(props) =>
    props.image ? "none" : secondaryColor};

  img {
    display: ${(props) => (props.image ? "block" : "none")};
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;
export const Biography = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const ContactInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;
export const Services = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 15vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
  row-gap: 2.5rem;
`;
