//components
import React, { Fragment } from 'react';
import { SmallEmptyState } from '../../../global/components';
import { AddButton } from '../../../global/components';
//styled-components
import { MaterialIcon } from '../../../global/styles/foundations/MaterialIcon';

export const RemindersList = ({ reminders }) => {
	if (reminders.length !== 0) {
		return (
			<Fragment>
				<h4>Recordatorios recientes...</h4>
				<MaterialIcon>search</MaterialIcon>
				{reminders.map((reminder) => <p>{reminder.title}</p>)}
				<label>Agregar un recordatorio</label>
				<MaterialIcon>add_circle_outline</MaterialIcon>
			</Fragment>
		);
	} else {
		return (
			<SmallEmptyState message="Parece que aún no hay recordatorios">
				<h4>¡Sé el primero en agregar uno!</h4>
				<AddButton position="static" />
			</SmallEmptyState>
		);
	}
};
