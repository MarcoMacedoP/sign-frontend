import {
	GET_PROVIDERS,
	ADD_PROVIDER,
	ADD_INCOME,
	EDIT_INCOME
} from '../types/actionTypes';
import { callApi } from '../../functions/callApi';
import { ThunkAction } from 'redux-thunk';
import { PayloadStatus } from '../types/AsyncActions';
import { GlobalState } from '../types/global';
import { Action, Dispatch } from 'redux';
//--------------get providers-----------------
export const getProviders = (status: PayloadStatus, response?: any) => ({
	type: GET_PROVIDERS,
	payload: { status, response }
});
export const fetchProviders: ThunkAction<
	void,
	GlobalState,
	null,
	Action<string>
> = () => (dispatch: Dispatch) => {
	dispatch(getProviders('loading'));
	return callApi('/providers/')
		.then((response) => dispatch(getProviders('success', response)))
		.catch(({ message }) => dispatch(getProviders('error', message)));
};
//--------------end get providers-----------------
//-------------- add provider-----------------
export const addProvider = (status: PayloadStatus, response?: any) => ({
	type: ADD_PROVIDER,
	payload: { status, response }
});
export const fetchAddProvider: ThunkAction<
	void,
	GlobalState,
	null,
	Action<string>
> = (provider) => (dispatch: Dispatch) => {
	dispatch(addProvider('loading'));
	return callApi('/providers/', {
		method: 'post',
		body: JSON.stringify(provider)
	})
		.then((response) => dispatch(addProvider('success', response)))
		.catch(({ message }) => dispatch(addProvider('error', message)));
};
//--------------end add provider-----------------

//-------------- add provider-income-----------------
export const addIncome = (status: PayloadStatus, response?: any) => ({
	type: ADD_INCOME,
	payload: { status, response }
});
export const fetchAddIncome: ThunkAction<
	void,
	GlobalState,
	null,
	Action<string>
> = (income, providerId) => (dispatch: Dispatch) => {
	dispatch(addIncome('loading', { income, providerId }));
	return callApi('/expenses/', {
		method: 'post',
		body: JSON.stringify({ ...income, providerId })
	})
		.then((response) => dispatch(addIncome('success', response)))
		.catch(({ message }) => dispatch(addIncome('error', message)));
};
//-----------edit provider -------------
export const editExpense = (status: PayloadStatus, response?: any) => ({
	type: EDIT_INCOME,
	payload: { status, response }
});
export const fetchEditExpense = (expense: any) => (dispatch: Function) => {
	dispatch(editExpense('loading', { expense }));
	return callApi(`/expenses/${expense._id}`, {
		method: 'PATCH',
		body: JSON.stringify(expense)
	})
		.then((response) => dispatch(editExpense('success', response)))
		.catch((error) => dispatch(editExpense('error', { error })));
};
