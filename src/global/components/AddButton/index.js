import React from 'react';
import { Button, Container } from './styles';
export const AddButton = ({ position, onClick }) => {
	return (
		<Container position={position} onClick={onClick}>
			<Button>add</Button>
		</Container>
	);
};
