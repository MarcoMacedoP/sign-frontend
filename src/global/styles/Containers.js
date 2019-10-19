import styled from "styled-components";
import {appPadding, whiteColorLigth} from "./variables";

export const AppContainer = styled.main`
  padding: ${appPadding};
  background: ${whiteColorLigth};
  box-sizing: border-box;
`;
export const PageContainer = styled(AppContainer)`
  width: 100%;
  position: static;
  height: min-content;
`;
