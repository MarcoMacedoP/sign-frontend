import React from 'react'
import { SmallEmptyState } from '../SmallEmptyState'
import { Container } from './styles'
export const PageNotFound = () => (
  <Container>
    <SmallEmptyState message='Ups, parece que esta página no existe' />
  </Container>
)
