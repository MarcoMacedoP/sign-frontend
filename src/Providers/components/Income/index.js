// Components
import React from 'react'
// Resources
import { Container, P, Price, MoneyIcon, ArrowIcon } from './styles'

/** This is the component that show an Income.
    An income can be understanded as a product or service that the providers offers. OMG
*/
export const Income = ({ name, description, price, onClick }) => (
  <Container onClick={onClick}>
    <strong>{name || 'Service'}</strong>
    <P>{description || 'This is the service/product description'}</P>
    <Price>
      <MoneyIcon>attach_money</MoneyIcon>
      {price || '99.99'} mxn
    </Price>
    <ArrowIcon>arrow_forward_ios</ArrowIcon>
  </Container>
)
