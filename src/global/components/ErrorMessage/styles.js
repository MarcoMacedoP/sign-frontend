import styled from "styled-components";
import { InfoMessage } from "../InfoMessage";
//vars
import { errorColor } from "../../styles/variables";

export const Error = styled(InfoMessage)`
  background-color: ${errorColor};
  position: static;
  width: 90%;
`;
