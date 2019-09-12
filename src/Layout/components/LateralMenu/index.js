// Modules
import React from 'react'
// Components
import { LateralMenuItem } from '../LateralMenuItem'
// Styled Components
import {
  Menu,
  Header,
  ProfileImage,
  Username,
  Location,
  Navigation,
  CloseIcon
} from './styles'

export const LateralMenu = ({ isShowed, username, location, closeMenu }) => {
  if (isShowed) {
    return (
      <Menu>
        <CloseIcon onClick={closeMenu}>close</CloseIcon>
        <Header>
          <ProfileImage />
          <Username>{username || 'Username'}</Username>
          <Location>{location || 'Job title'}</Location>
        </Header>
        <Navigation>
          <LateralMenuItem
            name='Inicio'
            direction='/app/'
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name='Proyectos'
            direction='/app/projects'
            closeMenu={closeMenu}
          />
        </Navigation>
      </Menu>
    )
  } else {
    return false
  }
}
