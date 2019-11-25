// Components
import React from 'react'
import { useHandleState } from "../../../global/hooks";
import { SecondaryButton } from '../../../global/components/SecondaryButton'
import { errorColor } from '../../../global/styles/variables'
import { ActionIncome } from '../ActionIncome'

// The component
export const EditIncome = ({ onClose, isOpen, incomeName, onChange }) =>{
   const { state, addFormValueToState, handleSwitchChange } = useHandleState({
    name: '',
    description: '',
    cost: '',
    costPerHour: false, 
    type: 'service'
  });
  return (
  <ActionIncome
    formValues={state}
    onSwitchChange={handleSwitchChange}
    onInputChange={addFormValueToState}
    isOpen={isOpen}
    onClose={onClose}
    modalTitle={`Editar ${incomeName}`}
    onChange={onChange}
  >
    <SecondaryButton borderColor={errorColor} width='80%'>
      Eliminar
    </SecondaryButton>
  </ActionIncome>
)}
