// Components
import React from 'react';
import { useHandleState } from '../../../global/hooks';
import { SecondaryButton } from '../../../global/components/SecondaryButton';
import { errorColor } from '../../../global/styles/variables';
import { ActionIncome } from '../ActionIncome';

//redux
import { connect } from 'react-redux';
import { fetchEditExpense } from '../../../global/redux/actions/providers';

// The component
const EditIncome = ({ expense = {}, onClose, isOpen, fetchEditExpense }) => {
	const {
		state,
		addFormValueToState,
		handleSwitchChange,
		setState
	} = useHandleState(expense);

	React.useEffect(() => setState(expense), [expense]);

	const onSubmit = () => fetchEditExpense(state);
	if (!expense) {
		return null;
	} else {
		return (
			<ActionIncome
				onSubmit={onSubmit}
				formValues={state}
				onSwitchChange={handleSwitchChange}
				onInputChange={addFormValueToState}
				isOpen={isOpen}
				onClose={onClose}
				modalTitle={`Editar ${state.name}`}
			>
				<SecondaryButton bordercolor={errorColor} width="80%">
					Eliminar
				</SecondaryButton>
			</ActionIncome>
		);
	}
};

export default connect(null, { fetchEditExpense })(EditIncome);
