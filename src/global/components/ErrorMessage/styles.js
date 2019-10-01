import styled from "styled-components";
import {Icon as BaseIcon} from "../Icon";
//vars
import {errorColor, whiteColorLigth} from "../../styles/variables";
export const Error = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  background-color: ${errorColor};
  color: ${whiteColorLigth};

  display: flex;
  justify-content: space-between;

  width: 90%;
`;
export const Icon = styled(BaseIcon)`
  color: ${whiteColorLigth};
`;
