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
// Routes
import {
  appHomeRoute,
  clientsRoute,
  providersRoute
} from '../../../global/utils/routes'
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
            direction={appHomeRoute}
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name='Proyectos'
            direction='/404/'
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name={providersRoute}
            direction='/404/'
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name='Clientes'
            direction={clientsRoute}
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name='Colaboradores'
            direction='/404/'
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name='Recordatorios'
            direction='/404/'
            closeMenu={closeMenu}
          />
        </Navigation>
      </Menu>
    )
  } else {
    return false
  }
}
