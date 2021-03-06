import styled from "styled-components";
import { whiteColorLigth } from "../../../global/styles/variables";
import { Button as BaseButton } from "../../../global/styles/foundations/Buttons";
import { H3 } from "../../../global/styles/texts";
export const Main = styled.main`
  box-sizing: border-box;
  background-color: ${whiteColorLigth};
  padding: 22vh 6.25vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props =>
    props.backgroundImage && `background-image: url(${props.backgroundImage});`}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;
export const Button = styled(BaseButton)`
  margin-top: 3rem;
  min-width: 300px;
  background-color: red;
  background-image: linear-gradient(
    269deg,
    #ca50bb,
    #c55abd 24%,
    #90ced8 92%,
    #86e5dd
  );
  min-height: 50px;
  transition: box-shadow 200ms ease-out;
  &:hover,
  &:active {
    background-image: linear-gradient(
      190deg,
      #ca50bb,
      #c55abd 24%,
      #90ced8 92%,
      #86e5dd
    );
    box-shadow: 0px 0px 30px 5px rgba(202, 80, 187, 0.6);
  }
`;

export const Subtitle = styled(H3)`
  margin-top: 2rem;
`;
