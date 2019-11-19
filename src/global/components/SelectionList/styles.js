import styled from "styled-components";
import { Modal, SecondaryButton } from "../../../global/components";

export const StyledModal = styled(Modal)`
  min-height: 300px;
  position: relative;
`;
export const StyledSecondaryButton = styled(SecondaryButton)`
  && {
    position: absolute;
    bottom: 1rem;
    width: 60%;
  }
`;
