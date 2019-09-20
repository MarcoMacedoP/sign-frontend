import styled from "styled-components";
import { appPadding, whiteColorLigth } from "./variables";

export const AppContainer = styled.main`
  padding: ${appPadding};
  background: ${whiteColorLigth};
`;
export const PageContainer = styled(AppContainer)`
  position: relative;
  top: 0;
  z-index: 3;
  height: min-content;
`;
