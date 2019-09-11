import React from 'react';
import { ClientPage } from '../ClientPage';

//hooks
import { useHandleState } from '../../../global/hooks/useHandleState';

export function ClientPageContainer({ name, lastname, email, phone }) {
	const initialState = {
		projects: [],
		comments: [],
		reminders: [],
		actualComment: '',
		id: '',
		name: '',
		lastname: '',
		email: '',
		phone: ''
	};

	const { state, addArrayValueToState, addFormValueToState } = useHandleState(
		initialState
	);

	function addCommentHandler() {
		const date = new Date();

		addArrayValueToState(state.comments, 'comments', {
			content: state.actualComment,
			clientId: state.id,
			date
		});
	}

	return (
		<ClientPage
			{...state}
			handleChange={addFormValueToState}
			addCommentHandler={addCommentHandler}
		/>
	);
}
