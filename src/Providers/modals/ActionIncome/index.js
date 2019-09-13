// Components
import React from 'react'
import { Modal } from '../../../global/components/Modal'
import { Input } from '../../../global/components/Input'
import { SecondaryButton } from '../../../global/components/SecondaryButton'
import { Switch } from '@material-ui/core'
// Styles
import { FormControlLabel, Title } from './styles'
import {
  blackColorLigth,
  positiveStatusColor
} from '../../../global/styles/variables'
// hooks
import { useHandleState } from '../../../global/hooks/useHandleState'

/**
 * Shows a modal with input for incomes, when save button is pressed calls onSubmit function.
 * @param {*} onClose the function that manages the close events
 * @param {*} isOpen a boolean that shows the component if is true.
 * @param {*} onSubmit the function invocated when save button is called.
 * @param {*} children use it if you want to add another buttons between "cancel" and "save", maybe for another component
 * @param {*} modalTitle the action that component are doing.
 * @TODO find a way to disable temporaly caché for load new resource
 */
export function ActionIncome ({
  onClose,
  isOpen,
  onSubmit,
  children,
  modalTitle
}) {
  const initialState = {
    incomeName: '',
    incomeDescription: '',
    incomeCost: '',
    costPerHour: false
  }
  const { state, addFormValueToState, handleSwitchChange } = useHandleState(
    initialState
  )
  // prevents missing onSubmit error
  if (!onSubmit) {
    onSubmit = () => console.log('no onSubmit added')
  }
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <Title>{modalTitle}</Title>
      <Input
        name='incomeName'
        label='Nombre del servicio'
        placeholder='Reparación eléctrica'
        onChange={addFormValueToState}
        value={state.incomeName}
      />
      <Input
        name='incomeDescription'
        label='Descripción'
        placeholder='Está es la descripción'
        onChange={addFormValueToState}
        value={state.incomeDescription}
      />

      <Input
        name='incomeCost'
        label='Costo'
        placeholder='800'
        onChange={addFormValueToState}
        value={state.incomeCost}
      />
      <FormControlLabel
        control={
          <Switch
            name='costPerHour'
            checked={state.costPerHour}
            onChange={handleSwitchChange}
            value={state.costPerHour}
            color='primary'
          />
        }
        label='¿Costo por hora?'
      />
      <SecondaryButton
        borderColor={positiveStatusColor}
        onClick={onSubmit}
        width='80%'
      >
        Agregar
      </SecondaryButton>
      {children}
      <SecondaryButton
        borderColor={blackColorLigth}
        onClick={onClose}
        width='80%'
      >
        Cancelar
      </SecondaryButton>
    </Modal>
  )
}
