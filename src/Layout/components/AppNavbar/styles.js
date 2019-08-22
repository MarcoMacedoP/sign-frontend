import styled from "styled-components";
import { whiteColorLigth } from "../../../global/styles/variables";
export const Navbar = styled.nav`
  max-width: 100vw;
  width: 100vw;
  padding: 1rem 6.5625vw;
  box-sizing: border-box;
  max-height: 4rem;
  min-height: 3rem;
  height: 8.75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 13px 0 rgba(50, 54, 53, 0.3);
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${whiteColorLigth};
`;
