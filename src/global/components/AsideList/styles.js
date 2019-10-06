import styled from "styled-components";
import {BaseIcon as Icon} from "../Icon/styles";
import {
  appShadow,
  whiteColorLigth,
  whiteColor
} from "../../styles/variables";
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";

import {PictureCard} from "../PictureCard";
import {
  Description,
  PictureContainer,
  Title
} from "../PictureCard/styles";
export const Aside = styled.aside`
  width: 70vw;
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  box-shadow: ${appShadow};
  background-color: ${whiteColorLigth};
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  ${Icon} {
    margin: 0 0.5rem;
  }
`;
export const AsideListItemBase = styled(PictureCard)`
  margin: 0;
  box-shadow: none;
  min-height: 3rem;
  background-color: ${whiteColorLigth};
  width: 100%;
  transition: background-color 250ms linear;

  :hover {
    background-color: ${whiteColor};
  }

  ${Description} {
    max-height: 40px;
    overflow: hidden;
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
