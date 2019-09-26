import styled from "styled-components";
import {Button as BaseButton} from "../../../global/components";

export const Activities = styled.article`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ActivitiesContainer = styled.section`
  margin-top: 1rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: min-content 1fr;
  gap: 1rem;
`;
export const Button = styled(BaseButton)`
  & & {
    height: 4rem;
  }
`;
