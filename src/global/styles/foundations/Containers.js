import  { css } from "styled-components";

export function setHalfScreenContainer() {
  return css`
    width: 100%;
    padding: 2% 5%;
    min-height: 100vh;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  `;
}
export function setChildContainer(
  gridColumn = "1/2",
  gridRow = "1/2"
) {
  return css`
    width: 100%;
    height: 100%;
    grid-column: ${gridColumn};
    grid-row: ${gridRow};
  `;
}
