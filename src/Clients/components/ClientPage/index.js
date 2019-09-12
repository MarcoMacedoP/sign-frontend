//components
import React from 'react';
import { LongCard, PersonInfo } from '../../../global/components';
import { Comments } from '../Comments';
import { RemindersList } from '../../../Reminders/components/RemindersList';
//styled-components
import { Article, Section, Container } from './styles';

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
}) => {
	return (
		<Container>
			<PersonInfo
				name={`${name} ${lastname}`}
				imageIsShow={false}
				about="Acerca del cliente"
				phone={phone}
				email={email}
			/>

			<Article>
				<h2>Seguimiento de cliente </h2>
				<Section>
					<Comments
						comments={comments}
						actualComment={actualComment}
						handleChange={handleChange}
						addCommentHandler={addCommentHandler}
					/>
				</Section>
			</Article>
			<Article>
				<h2>Recordatorios</h2>
				<Section>
					<RemindersList reminders={reminders} />
				</Section>
			</Article>

			<Article>
				<h2>Lista de proyectos</h2>
				<ul>{projects.map((id) => <LongCard key={id} />)}</ul>
			</Article>
		</Container>
	);
};
