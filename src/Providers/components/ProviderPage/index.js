import React from 'react';
//components
import { IncomeList } from '../IncomeList';
import { InformationHeader } from '../../../global/components';
//modals
import AddIncome from '../../modals/AddIncome';
import EditIncome from '../../modals/EditIncome';
//styled-components
import { PageContainer } from '../../../global/styles/Containers';
// hooks
import { useModalState, useHandleState } from '../../../global/hooks/';
//redux
import { connect } from 'react-redux';
function ProviderPage({ provider, services = [], products = [] }) {
	// modals
	const [addServiceIsOpen, toggleAddService] = useModalState();
	const [editServiceIsOpen, toggleEditService] = useModalState();
	const [addProductIsOpen, toggleAddProduct] = useModalState();
	const [editProductIsOpen, toggleEditProduct] = useModalState();

	// Form values of AddIncome and EditIncome
	const { state, addFormValueToState } = useHandleState({});
	//provider info
	const {
		name,
		lastname,
		image_url,
		about,
		email,
		phone,
		provider_id
	} = provider;

	const [selectedExpense, setSelectedExpense] = React.useState({});
	const handleEditProduct = (product) => {
		setSelectedExpense(product);
		toggleEditProduct();
	};
	const handleEditService = (service) => {
		setSelectedExpense(service);
		toggleEditService();
	};
	return (
		<PageContainer>
			<InformationHeader
				title={`${name} ${lastname}`}
				imageUrl={image_url}
				about={about}
				email={email}
				phone={phone}
			/>
			<IncomeList
				type="Servicios"
				incomeListArray={services}
				onAddButtonClick={toggleAddService}
				onIncomeClick={handleEditService}
			/>
			<IncomeList
				type="Productos"
				incomeListArray={products}
				onAddButtonClick={toggleAddProduct}
				onIncomeClick={handleEditProduct}
			/>

			{/* ---------Modals---- */}
			<AddIncome
				onClose={toggleAddService}
				isOpen={addServiceIsOpen}
				type="service"
				onChange={addFormValueToState}
				formValues={state}
				providerId={provider_id}
			/>
			{selectedExpense && (
				<EditIncome
					expense={selectedExpense}
					onClose={toggleEditService}
					isOpen={editServiceIsOpen && selectedExpense}
					type="service"
					onChange={addFormValueToState}
					formValues={state}
					providerId={provider_id}
				/>
			)}
			{
				// products modals
			}
			<AddIncome
				onClose={toggleAddProduct}
				isOpen={addProductIsOpen}
				type="product"
				onChange={addFormValueToState}
				formValues={state}
				providerId={provider_id}
			/>
			{selectedExpense && (
				<EditIncome
					expense={selectedExpense}
					onClose={toggleEditProduct}
					isOpen={editProductIsOpen && selectedExpense}
					type="product"
					onChange={addFormValueToState}
					formValues={state}
					providerId={provider_id}
				/>
			)}
			{/* -------------- */}
		</PageContainer>
	);
}
const mapStateToProps = ({ providers }, props) => {
	const providerId = parseInt(props.match.params.providerId);
	const [provider] = providers.list.filter(
		(provider) => provider.provider_id === providerId
	);
	if (provider.expenses) {
		const services = provider.expenses.filter(
			(expense) => expense && expense.type === 'service'
		);
		const products = provider.expenses.filter(
			(expense) => expense && expense.type === 'product'
		);
		return { provider, services, products };
	} else {
		return { provider };
	}
};
export default connect(mapStateToProps, null)(ProviderPage);
