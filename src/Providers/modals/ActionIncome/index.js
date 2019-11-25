// Components
import React from 'react';
import { Modal } from '../../../global/components/Modal';
import { Input } from '../../../global/components/Input';
import { SecondaryButton } from '../../../global/components/SecondaryButton';
import { Switch } from '@material-ui/core';
// Styles
import { FormControlLabel, Title } from './styles';
import {
	blackColorLigth,
	positiveStatusColor
} from '../../../global/styles/variables';

export function ActionIncome({
	formValues,
	onInputChange,
	onSwitchChange,
	onClose,
	isOpen,
	onSubmit,
	children,
	modalTitle
}) {
	const handleSubmit = () => {
		onSubmit();
		onClose();
	};
	return (
		<Modal onClose={onClose} isOpen={isOpen}>
			<Title>{modalTitle}</Title>
			<Input
				name="name"
				label="Nombre del servicio"
				placeholder="Reparación eléctrica"
				onChange={onInputChange}
				value={formValues.name}
			/>
			<Input
				name="description"
				label="Descripción"
				placeholder="Está es la descripción"
				onChange={onInputChange}
				value={formValues.description}
			/>

			<Input
				name="cost"
				label="Costo"
				placeholder="800"
				onChange={onInputChange}
				value={formValues.cost}
			/>
			<FormControlLabel
				control={
					<Switch
						name="costPerHour"
						checked={formValues.costPerHour}
						onChange={onSwitchChange}
						value={formValues.costPerHour}
						color="primary"
					/>
				}
				label="¿Costo por hora?"
			/>
			<SecondaryButton
				bordercolor={positiveStatusColor}
				onClick={handleSubmit}
				width="80%"
			>
				Agregar
			</SecondaryButton>
			{children}
			<SecondaryButton
				bordercolor={blackColorLigth}
				onClick={onClose}
				width="80%"
			>
				Cancelar
			</SecondaryButton>
		</Modal>
	);
}
