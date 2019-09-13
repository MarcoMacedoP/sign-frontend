// Components
import React from 'react'
import { SecondaryButton } from '../../../global/components/SecondaryButton'
import { errorColor } from '../../../global/styles/variables'
import { ActionIncome } from '../ActionIncome'

// The component
export const EditIncome = ({ onClose, isOpen, incomeName, onChange }) => (
  <ActionIncome
    isOpen={isOpen}
    onClose={onClose}
    modalTitle={`Editar ${incomeName}`}
    onChange={onChange}
  >
    <SecondaryButton borderColor={errorColor} width='80%'>
      Eliminar
    </SecondaryButton>
  </ActionIncome>
)
