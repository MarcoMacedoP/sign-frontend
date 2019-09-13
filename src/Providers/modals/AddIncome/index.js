import React from 'react'
import { ActionIncome } from '../ActionIncome'

export const AddIncome = ({
  onSubmit,
  onAction,
  incomeName,
  isOpen,
  onClose
}) => (
  <ActionIncome
    onSubmit={onSubmit}
    onAction={onAction}
    isOpen={isOpen}
    onClose={onClose}
    modalTitle={`Agregar ${incomeName}`}
  />
)
