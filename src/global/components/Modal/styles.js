import styled from "styled-components";
import {
  blackColorTransparent,
  whiteColor
} from "../../styles/variables";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";

export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${blackColorTransparent};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* filter: blur(22px); */
`;
export const ModalContainer = styled.div`
  min-width: 650px;
  min-height: 500px;
  background-color: ${whiteColor};
  border-radius: 2rem;

  position: fixed;
  top: 15%;
  left: 25%;
  right: 25%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const CloseIcon = styled(MaterialIcon)`

position: absolute; 
top: 1rem;
right: 1rem;
`;
