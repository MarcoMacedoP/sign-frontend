import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MaterialIcon } from '../../../global/styles/foundations/MaterialIcon'

import {
  whiteColorLigth,
  blackColorTransparent,
  mainColor
} from '../../../global/styles/variables'

export const NavigationItem = styled(Link)`
  width: 100%;
  height: 7vh;
  padding: 0 0 0 2rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${mainColor};
    opacity: 1;
    * {
      color: ${whiteColorLigth};
    }
  }
`
export const NavigationItemTitle = styled.p`
  padding: 0.5rem;
  text-decoration: none;
  opacity: 1;
  color: ${blackColorTransparent};
  transition: color 120ms ease-out;
`
export const Navicon = styled(MaterialIcon)`
  &:last-child {
    position: absolute;
    right: 0;
  }
`
