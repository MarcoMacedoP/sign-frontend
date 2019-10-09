import styled from "styled-components";
import {BaseIcon as Icon} from "../Icon/styles";
import {
  appShadow,
  whiteColorLigth,
  whiteColor
} from "../../styles/variables";
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";
import {H3, Subtitle} from "../../styles/texts";
import {PictureCard} from "../PictureCard";
import {
  Description,
  Title,
  IconContainer,
  PictureContainer
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
  ${IconContainer} {
    display: none;
  }
  ${PictureContainer} {
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

  @media ${cellphoneMediaQuery} {
    width: 70vw;
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
        ${Description} {
          display: none;
        }
        ${Title} {
          display: none;
        }
        ${PictureContainer}{
          padding:0;
        }
  
  `}
  }
`;
