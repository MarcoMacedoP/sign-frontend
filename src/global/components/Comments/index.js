import React from "react";
import { SmallEmptyState } from "../SmallEmptyState";
import { Button } from "../Button";
//styled-components
import {
  CommentBox,
  Container,
  CommentImage,
  CommentsList,
  Comment,
  CommentContent,
  CommentDate
} from "./styles";
import { Subtitle } from "../../styles/texts";
/**
 * 
 * Shows a list of comments
 * 
 * @param {*} comments  [] an array with the comments to show.
 * @param {*}  addCommentHandler the function that adds comments.
 * @param {*} handleChange handle changes on CommentBox
   @param {*} actualComment the state value of the actual comment
 */
export function Comments({
  comments = [],
  actualComment,
  addCommentHandler,
  handleChange
}) {
  const commentsList = React.createRef();
  const handlePressKey = event => {
    console.log("key pressed", event.key);
    if (event.key === "Enter") {
      addCommentHandler();
    }
  };

  if (comments.length !== 0) {
    return (
      <Container>
        <Subtitle>Comentarios recientes...</Subtitle>
        <CommentsList ref={commentsList}>
          {comments.map(comment => (
            <Comment key={comment._id}>
              <CommentImage />
              <CommentContent>
                {comment.content}

                <CommentDate>{`Publicado el ${comment.date}`}</CommentDate>
              </CommentContent>
            </Comment>
          ))}
        </CommentsList>
        <CommentBox
          name="actualComment"
          placeholder="Agrega un comentario"
          value={actualComment}
          onChange={handleChange}
          onKeyPress={handlePressKey}
        />
      </Container>
    );
  } else {
    return (
      <SmallEmptyState
        message="Aún no hay comentarios agregados..."
        callToAction="¡Sé el primero en agregar uno!"
      >
        <CommentBox
          name="actualComment"
          placeholder="Escribe aquí tu comentario"
          value={actualComment}
          onChange={handleChange}
        />
        <Button onClick={addCommentHandler}>GUARDAR</Button>
      </SmallEmptyState>
    );
  }
}
