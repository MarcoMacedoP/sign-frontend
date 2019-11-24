import styled from "styled-components";
//vars
import { blackColor, whiteColorDark } from "../../styles/variables";
import { BaseIcon as Icon } from "../Icon/styles";

export const Container = styled.div`
  max-width: 200px;
  max-height: 200px;
  width: 200px;
  height: 200px;

  border-radius: 50%;

  background-color: ${whiteColorDark};
  overflow: hidden;

  position: relative;
  margin: 1rem auto;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Upload = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${blackColor};
  opacity: 0.76;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  bottom: 0;

  ${Icon} {
    color: ${whiteColorDark};
    margin-top: 0.5rem;
  }
`;

export const UploadInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const UploadText = styled.p`
  color: ${whiteColorDark};
`;
