import styled from 'styled-components';
import {
	blackColorLigth,
	whiteColorDark,
	blackColor
} from '../../styles/variables';

export const Container = styled.section`
	width: 100%;
	margin: 1rem;
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Title = styled.h4`
	font-size: 1.5rem;
	color: ${whiteColorDark};
	margin-bottom: 1rem;
`;

export const Picture = styled.picture`
	width: 25vw;
	height: 25vw;
	overflow: hidden;
`;

export const Img = styled.img`
	width: 100%;
	height: auto;
	object-fit: contain;
	object-position: center;
`;

export const Message = styled.p`
	color: ${blackColorLigth};
	margin-bottom: 0.5rem;
`;

export const CallToAction = styled.p`
	color: ${blackColor};
	margin-bottom: 1rem;
	font-weight: bold;
`;
