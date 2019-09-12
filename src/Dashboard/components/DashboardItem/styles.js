import styled from 'styled-components'
import {
  whiteColor,
  mainColor,
  blackColorTransparent
} from '../../../global/styles/variables'
import { cellphoneMediaQuery } from '../../../global/styles/mediaQuerys'
import { Link } from 'react-router-dom'
import { MaterialIcon } from '../../../global/styles/foundations/MaterialIcon'

export const Card = styled(Link)`
  text-decoration: none;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 3px 6px 0 rgba(112, 112, 112, 0.5);
  background-color: ${whiteColor};
  width: 100%;
  max-height: 200px;
  height: 100%;
  cursor: pointer;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr 80%;
  gap: 1rem;

  transition: box-shadow 100ms ease-in 0ms;

  &:hover {
    opacity: 1;
    box-shadow: 0 3px 6px 0 ${mainColor};
  }
`
export const Icon = styled.picture`
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.75rem;
  img {
    @media ${cellphoneMediaQuery} {
      width: 4rem;
    }
  }
`
export const Title = styled.h2`
  font-size: 0.875rem;
  grid-column: 2/-1;
  grid-row: 1/2;
  display: flex;
  align-items: flex-end;
`
export const Description = styled.p`
  min-height: 55px;
  display: flex;
  align-items: flex-start;
  width: 70%;
  font-size: 1rem;
  grid-column: 2/-1;
  grid-row: 2/-1;
  @media ${cellphoneMediaQuery} {
    width: 80%;
  }
`
export const MaterialArrowForward = styled(MaterialIcon)`
  position: absolute;
  right: 0;
  align-self: center;
  color: ${(props) => (props.status ? mainColor : blackColorTransparent)};
  transition: color 100ms ease-in 0ms;
`
