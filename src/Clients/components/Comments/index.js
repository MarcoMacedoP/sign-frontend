import React, { Fragment } from 'react';
import { SmallEmptyState } from '../../../global/components';
//styled-components
import { Button } from '../../../global/components';
import { MaterialIcon } from '../../../global/styles/foundations/MaterialIcon';
import { CommentBox } from './styles';

export function Comments({
	comments = [],
	actualComment,
	addCommentHandler,
	handleChange
}) {
	if (comments.length !== 0) {
		//debugger;
		return (
			<Fragment>
				<h3>Comentarios</h3>
				<MaterialIcon>search</MaterialIcon>
				<h4>Comentarios recientes...</h4>
				{comments.map((comment) => (
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
