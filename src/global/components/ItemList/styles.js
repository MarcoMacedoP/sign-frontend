import styled from "styled-components";
import {Link} from "react-router-dom";
import {Icon} from "../Icon";
import {Loading} from "../Loading";

import {
  whiteColorDark,
  blackColorLigth
} from "../../styles/variables";
import {Container as AddButton} from "../AddButton/styles";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
`;
export const StyledTitle = styled.p`
  color: ${blackColorLigth};
  box-sizing: border-box;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${whiteColorDark};
  width: 100%;
  margin-bottom: 1rem;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StyledLoading = styled(Loading).attrs(() => ({
  size: "1.5rem"
}))`
  align-items: flex-start;
  min-height: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0 0.5rem;
`;
export const StyledAddSection = styled.div`
  color: ${blackColorLigth};
  cursor: pointer;
  height: 1.5rem;
  display: flex;
  align-items: center;

  ${AddButton} {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem 0 0;
    box-shadow: none;
    padding: 0;
  }
  :hover {
    opacity: 0.7;
  }
`;

export const StyledLi = styled.li`
  margin-bottom: 0.5rem;
`;
export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  position: relative;
`;
export const StyledPicture = styled.picture`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;

  background-color: ${whiteColorDark};
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
  }
`;
export const StyledDeleteIcon = styled(Icon).attrs(() => ({
  icon: "delete"
}))`
  position: absolute;
  right: 0;
`;
