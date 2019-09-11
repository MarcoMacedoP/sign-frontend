//components
import React from 'react';
import { LongCard, PersonInfo, Button } from '../../../global/components';

//styled-components
import { MaterialIcon } from '../../../global/styles/foundations/MaterialIcon';
import { PageContainer } from '../../../global/styles/Containers';

export const ClientPage = ({
	name,
	lastname,
	phone,
	email,
	projects,
	reminders,
	comments,
	actualComment,
	handleChange,
	addCommentHandler
}) => (
	<PageContainer>
		<PersonInfo
			name={name}
			imageIsShow={false}
			about="Acerca del cliente"
			phone={phone}
			email={email}
		/>

		<section>
			<h2>Seguimiento de cliente </h2>
			<div>
				<h3>Comentarios</h3>
				<MaterialIcon>search</MaterialIcon>
				<label htmlFor="actualComment">Agregar un comentario</label>
				<textarea
					name="actualComment"
					placeholder="Agrega un comentario"
					value={actualComment}
					onChange={handleChange}
				/>
				<Button onClick={addCommentHandler}>GUARDAR</Button>
				<h4>Comentarios recientes...</h4>
				{comments.length ? (
					comments.map((comment) => <p>{comment.content}</p>)
				) : (
					<h5>Parece que aún no hay comentarios</h5>
				)}
			</div>
			<div>
				<h3>Recordatorios</h3>
				<h4>Comentarios recientes...</h4>
				<MaterialIcon>search</MaterialIcon>
				{reminders.length !== 0 ? (
					reminders.map((reminder) => <p>{reminder.title}</p>)
				) : (
					<h5>Parece que aún no hay comentarios</h5>
				)}
				<label>Agregar un recordatorio</label>
				<MaterialIcon>add_circle_outline</MaterialIcon>
			</div>
		</section>

		<section>
			<h2>Lista de proyectos</h2>
			<ul>{projects.map((id) => <LongCard key={id} />)}</ul>
		</section>
	</PageContainer>
);
