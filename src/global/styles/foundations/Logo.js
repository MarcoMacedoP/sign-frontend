import {
  fontTitle,
  blackColorTransparent
} from "../../styles/variables";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Logo = styled(Link)`
text-decoration: none;
color: ${blackColorTransparent};
 font-size: 1.5rem;
  font-weight: 500;
  font-family: ${fontTitle};
  text-transform: uppercase;
   &:hover {
    opacity: 0.60;
}
`;
