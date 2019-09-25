import styled from "styled-components";
import {H1} from "../../styles/texts";
import {
  secondaryColor,
  whiteColorLigth,
  blackColorTransparent
} from "../../styles/variables";
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";
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

export const Name = styled(H1)`
  margin-bottom: 2.5rem;
`;

export const BiographyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  column-gap: 2.5rem;
  padding: 0 3rem;
  width: 80%;
  @media ${cellphoneMediaQuery} {
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  }
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
  display: ${props => (props.isShowed ? "block" : "none")};
  background-color: ${secondaryColor};
  grid-column: 1/2;
  img {
    display: ${props => (props.image ? "block" : "none")};
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;
export const Biography = styled.p`
  grid-column: 2/-1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.imageIsShow ? "flex-start" : "center"};
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
export const Date = styled.span`
  position: relative;
  :hover,
  :active {
    ::after {
      display: block;
    }
  }
  ::after {
    content: "Está es la fecha de entrega";
    padding: 0.5rem;
    display: none;
    background-color: ${blackColorTransparent};

    position: absolute;
    bottom: 0;
    left: 9rem;

    min-width: 50px;
    width: min-content;
    white-space: nowrap;

    border-radius: 0.5rem;
  }
`;
export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;
