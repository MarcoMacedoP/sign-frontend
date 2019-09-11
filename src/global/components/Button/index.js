import React from 'react';

import { Btn } from './styles';
import { CircularProgress } from '@material-ui/core';
export const Button = ({
	variant = 'contained',
	children,
	onClick,
	width,
	loading
}) => {
	if (loading) {
		return (
			<Btn disabled>
				<CircularProgress color="secondary" size="32px" />
			</Btn>
		);
	}
	return (
		<Btn variant={variant} onClick={onClick} width={width}>
			{children}
		</Btn>
	);
};
