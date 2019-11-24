import styled from "styled-components";
import {BaseIcon as Icon} from "../Icon/styles";
import {
  appShadow,
  whiteColorLigth,
  whiteColor
} from "../../styles/variables";
import {
  cellphoneMediaQuery,
  mediumScreen
} from "../../styles/mediaQuerys";
import {H3, Subtitle} from "../../styles/texts";
import {PictureCard} from "../PictureCard";
import {
  Description,
  Title,
  PictureContainer,
  Picture
} from "../PictureCard/styles";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  justify-content: ${props =>
    props.isShowed ? "space-between" : "center"};

  ${H3} {
    margin: 1rem 0;
  }
  ${Icon} {
    margin: ${props =>
      props.isShowed ? "0 0.5rem" : "0.5rem 0.5rem 0 0.5rem"};
  }
`;
export const AsideListItemBase = styled(PictureCard)`
  margin: 0;
  box-shadow: none;
  min-height: 3rem;
  background-color: ${whiteColorLigth};
  width: 100%;
  transition: background-color 250ms linear;
  border-radius: 0.5rem;

  :hover {
    background-color: ${whiteColor};
  }
  ${Description} {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${mediumScreen} {
    ${Picture} {
      min-width: 2rem;
      min-height: 2rem;
      width: 2rem;
      width: 2rem;
    }
  }

  @media ${cellphoneMediaQuery} {
    grid-template-rows: 1fr;

    ${Title} {
      display: flex;
      align-items: center;
      margin: 0 0.5rem;
    }

    ${Description} {
      display: none;
    }
  }
`;
export const Aside = styled.aside`
  padding: 0 0 0 0.5rem;
  width: ${props => (props.isShowed ? "30vw" : "4rem")};
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  box-shadow: ${appShadow};
  background-color: ${whiteColorLigth};

  transition: width 150ms linear;
  @media ${mediumScreen} {
    width: ${props => (props.isShowed ? "50vw" : "4rem")};
  }

  @media ${cellphoneMediaQuery} {
    width: ${props => (props.isShowed ? "30vw" : "4rem")};
  }
  ${Subtitle} {
    display: ${props => !props.isShowed && "none"};
  }
  ${AsideListItemBase} {
    ${props =>
      !props.isShowed &&
      `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 9.21vh;
        ${Description} {
          display: none;
        }
        ${Title} {
          display: none;
        }
        ${PictureContainer}{
          padding:0;
        }
        ${Picture}{
          min-width: 2rem;
          min-height: 2rem;
          width: 2rem;
          height: 2rem;
        }
  `}
  }
`;
