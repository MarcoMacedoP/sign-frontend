import React from 'react'

// styled-components
import { NavigationItem, NavigationItemTitle, Navicon } from './styles'

export const LateralMenuItem = ({ direction, name, closeMenu }) => {
  return (
    <NavigationItem to={direction} onClick={closeMenu}>
      <Navicon>all_inbox</Navicon>
      <NavigationItemTitle onClick={closeMenu}>{name}</NavigationItemTitle>
      <Navicon>chevron_right</Navicon>
    </NavigationItem>
  )
}
