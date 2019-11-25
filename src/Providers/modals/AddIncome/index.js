import React from 'react'
import { ActionIncome } from '../ActionIncome'
//redux
import { fetchAddIncome } from "../../../global/redux/actions/providers";
import {connect} from "react-redux";
import { useHandleState } from '../../../global/hooks';

export const AddIncome = ({
  type,
  isOpen,
  onClose, 
  providerId, 
  fetchAddIncome
}) => {
  const { state, addFormValueToState, handleSwitchChange } = useHandleState({
    name: '',
    description: '',
    cost: '',
    costPerHour: false, 
    type,
    providerId
  });
  const handleSubmit = () => fetchAddIncome(state, providerId);

  return (
  <ActionIncome
    onInputChange={addFormValueToState}
    onSwitchChange={handleSwitchChange}
    formValues={state}
    type={type}
    onSubmit={handleSubmit}
    isOpen={isOpen}
    onClose={onClose}
    modalTitle={`Agregar ${type[0].toUpperCase() && type.slice(1)}`}
  />
  )
}


const mapStateToProps = (state) => ({
  actionStatus : state.providers.status.actionOnExpense
})


export default connect(mapStateToProps, { fetchAddIncome })(AddIncome);