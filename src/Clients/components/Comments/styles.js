import styled from 'styled-components';
import { blackColorTransparent } from '../../../global/styles/variables';

export const CommentBox = styled.textarea`
	resize: none;
	height: 4rem;
	width: 80%;
	margin-bottom: 1rem;
	padding: 0.5rem;
	box-sizing: border-box;

	background-color: transparent;
	border: 1px solid ${blackColorTransparent};
	border-radius: 1rem;
`;
