import React, {Fragment} from "react";
import {SmallEmptyState} from "../SmallEmptyState";
import {Icon} from "../Icon";
import {Button} from "../Button";
//styled-components
import {CommentBox} from "./styles";
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
  if (comments.length !== 0) {
    ////debugger;
    return (
      <Fragment>
        <h3>Comentarios</h3>
        <Icon icon="search" />
        <h4>Comentarios recientes...</h4>
        {comments.map(comment => (
          <div>
            <p>{comment.content}</p>
            <span>{`Publicado el :${comment.date}`}</span>
          </div>
        ))}
        <label htmlFor="actualComment">Agregar un comentario</label>
        <CommentBox
          name="actualComment"
          placeholder="Agrega un comentario"
          value={actualComment}
          onChange={handleChange}
        />
        <Button onClick={addCommentHandler}>GUARDAR</Button>
      </Fragment>
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
