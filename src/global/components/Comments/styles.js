import styled from "styled-components";
import {Caption} from "../../styles/texts";

import {
  blackColorTransparent,
  whiteColorDark
} from "../../styles/variables";

export const Container = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
export const CommentsList = styled.ol`
  display: flex;
  flex-direction: column;
  max-height: 150px;
  overflow: scroll;
`;
export const Comment = styled.li`
  display: grid;
  grid-template-columns: 3rem 1fr;
`;
export const CommentImage = styled.div`
  grid-column: 1/2;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0.5rem;

  background-color: ${whiteColorDark};
  background-image: ${props =>
    props.image ? `url(${props.image})` : "none"};
  background-size: cover;
  background-position: center;
`;
export const CommentContent = styled.p`
  grid-column: 2/-1;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;
export const CommentDate = styled(Caption)`
  grid-column: 2/-1;
  width: 100%;
`;
export const CommentBox = styled.textarea`
  resize: none;
  height: 4rem;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  box-sizing: border-box;

  background-color: transparent;
  border: 1px solid ${blackColorTransparent};
  border-radius: 1rem;
`;
