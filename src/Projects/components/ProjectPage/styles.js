import styled from "styled-components";

export const Activities = styled.article`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ActivitiesContainer = styled.section`
  margin-top: 1rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: min-content 1fr;
  gap: 1rem;
`;
export const Title = styled.h2``;
