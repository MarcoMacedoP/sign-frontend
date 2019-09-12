import React from 'react'

import { Card, Description, Icon, MaterialArrowForward, Title } from './styles'
export const DashboardItem = ({ icon, title, linkDirection, description }) => {
  const [cardStatus, setCardStatus] = React.useState(false)
  return (
    <Card
      to={linkDirection}
      onMouseOver={() => setCardStatus(true)}
      onMouseOut={() => setCardStatus(false)}
    >
      <Icon>
        <img src={icon} alt={`Icono de ${title}`} />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <MaterialArrowForward status={cardStatus}>
        arrow_forward_ios
      </MaterialArrowForward>
    </Card>
  )
}
