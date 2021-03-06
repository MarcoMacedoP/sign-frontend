import {
	GET_PROVIDERS,
	ADD_PROVIDER,
	ADD_INCOME,
	EDIT_INCOME
} from '../types/actionTypes';
import { ProviderType } from '../../../Providers/types/Provider';
import { AsyncAction } from '../types/AsyncActions';

type actionType = 'GET' | 'UPDATE' | 'REMOVE' | 'ADD' | 'UNSET';
type statusType = 'loading' | 'error' | 'success' | undefined;

export interface ActionOnProvider {
	type: actionType;
	status: statusType;
	errorDetails?: string;
}

export interface ProvidersState {
	list: Array<ProviderType>;
	status: {
		actionOnProvider: ActionOnProvider | null;
		actionOnExpense: ActionOnProvider | null;
		getProviders: {
			shouldFetch: boolean;
			status: statusType;
			errorDetails?: string;
		};
	};
}

const initalState: ProvidersState = {
	list: [],
	status: {
		actionOnExpense: null,
		actionOnProvider: {
			status: 'success',
			type: 'UNSET'
		},
		getProviders: {
			shouldFetch: true,
			status: undefined
		}
	}
};

export default (state = initalState, action: AsyncAction): ProvidersState => {
	if (action.payload) {
		const { response, status } = action.payload;
		switch (action.type) {
			//***********add providers***********
			case ADD_PROVIDER:
				if (status === 'success') {
					return {
						list: [...state.list, ...response],
						status: {
							...state.status,
							actionOnProvider: {
								type: 'ADD',
								status: status
							}
						}
					};
				} else {
					return {
						...state,
						status: {
							...state.status,
							actionOnProvider: {
								type: 'ADD',
								status: status,
								errorDetails: status === 'error' && response
							}
						}
					};
				}

			//***********get providers***********
			case GET_PROVIDERS:
				if (status === 'success') {
					return {
						list: [...response],
						status: {
							...state.status,
							getProviders: {
								status,
								shouldFetch: false
							}
						}
					};
				} else {
					return {
						...state,
						status: {
							...state.status,
							getProviders: {
								shouldFetch:
									status === 'loading' ? true : false,
								status,
								errorDetails: status === 'error' && response
							}
						}
					};
				}
			/*******add income*******/
			case ADD_INCOME:
				if (status === 'loading') {
					const providers = state.list.map((provider) => {
						if (provider.provider_id === response.providerId) {
							return {
								...provider,
								expenses: provider.expenses
									? [response.income, ...provider.expenses]
									: [response.income]
							};
						} else return provider;
					});
					return {
						status: {
							...state.status,
							actionOnExpense: {
								status: 'loading',
								type: 'ADD'
							}
						},
						list: providers
					};
				}
				if (status === 'success') {
					state.list.shift();
					return {
						list: [response, ...state.list],
						status: {
							...state.status,
							actionOnExpense: {
								type: 'ADD',
								status
							}
						}
					};
				} else {
					return {
						...state,
						status: {
							...state.status,
							actionOnExpense: {
								type: 'ADD',
								status,
								errorDetails: response
							}
						}
					};
				}
			case EDIT_INCOME:
				if (status !== 'error') {
					debugger;
					return {
						status: {
							...state.status,
							actionOnExpense: {
								type: 'UPDATE',
								status
							}
						},
						list: state.list.map((provider) =>
							provider.provider_id === response.expense.providerId
								? {
										...provider,
										expenses: provider.expenses.map(
											(expense) =>
												expense._id ===
												response.expense._id
													? response.expense
													: expense
										)
								  }
								: provider
						)
					};
				} else {
					return {
						...state,
						status: {
							...state.status,
							actionOnExpense: {
								type: 'UPDATE',
								status,
								errorDetails: response
							}
						}
					};
				}
			default:
				return state;
		}
	} else {
		return state;
	}
};
