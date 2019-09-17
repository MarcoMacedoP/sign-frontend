import styled from 'styled-components'
import { setHeadlineText } from '../../styles/foundations/Texts'
import { appPadding } from '../../styles/variables'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: ${appPadding};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  ${setHeadlineText({ size: '3rem' })};
`
export const SearchBarContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`
