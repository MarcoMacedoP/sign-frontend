import styled from "styled-components";
import {
  blackColorTransparent,
  whiteColorLigth
} from "../../styles/variables";
import {MaterialIcon} from "../../../global/styles/foundations/MaterialIcon";

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
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  /* filter: blur(22px); */
`;
export const ModalContainer = styled.div`
  min-width: 500px;
  max-width: 70vw;
  min-height: min-content;
  box-sizing: border-box;

  background-color: ${whiteColorLigth};
  border-radius: 2rem;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem 4.5rem 2rem;
  position: relative;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    min-width: 80vw;
    padding: 1.5rem 3rem 2rem;
  }
`;
export const CloseIcon = styled(MaterialIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
