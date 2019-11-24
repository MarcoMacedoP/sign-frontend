import styled from "styled-components";
import { Modal } from "../";

export const StyledModal = styled(Modal)`
  min-height: 300px;
  min-width: 300px;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }
  p {
    width: 83%;
    text-align: center;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
`;
