import styled from "styled-components";
import {
  appPadding,
  whiteColorLigth
} from "../../../global/styles/variables";

export const Container = styled.div`
 ${appPadding()}
  background: ${whiteColorLigth};
  position: relative;
  top: 0;
  z-index: 3;
  height: min-content;
`;
