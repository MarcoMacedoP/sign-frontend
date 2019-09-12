import React from 'react';

//image
import defaultImage from './static/no_data.svg';
//styled-components}
import {
	Img,
	Picture,
	Container,
	Title,
	Message,
	CallToAction
} from './styles';
//component
export const SmallEmptyState = ({ message, image, children, callToAction }) => (
	<Container>
		<Title>Uhm...</Title>
		<Picture>
			<Img src={image || defaultImage} alt={message} />
		</Picture>
		<Message>{message}</Message>
		<CallToAction>{callToAction}</CallToAction>
		{children}
	</Container>
);
