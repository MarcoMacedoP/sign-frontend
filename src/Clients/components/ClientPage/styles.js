import styled from 'styled-components';

import { PageContainer } from '../../../global/styles/Containers';

export const Container = styled(PageContainer)`
	position: relative;
	top: 0;
	z-index: 3;
	height: min-content;
`;
export const Article = styled.article`
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

export const Section = styled.section`
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;
