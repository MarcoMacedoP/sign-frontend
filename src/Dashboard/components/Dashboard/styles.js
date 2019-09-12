import styled from 'styled-components';
import backgroundImage from '../../../global/images/backgroundImage.svg';

export const Container = styled.div`
	overflow: none;
	width: 100%;
	height: 91.25vh;
	padding: 7%;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	column-gap: 2.5rem;
	row-gap: 2.5rem;
	grid-template-rows: repeat(3, minmax(15vh, min-content));
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: bottom;
`;
