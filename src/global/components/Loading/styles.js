import styled from "styled-components";
import {fontBody} from "../../styles/variables";
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Message = styled.p`
  font-family: ${fontBody};
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;
