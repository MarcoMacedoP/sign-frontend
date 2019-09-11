//Components
import React from 'react';
import { withRouter } from 'react-router-dom';

//Styled components
import { MaterialIcon } from '../../styles/foundations/MaterialIcon';
import {
	About,
	Navigation,
	Name,
	BiographyContainer,
	Biography,
	ProfilePicture,
	ContactInfoContainer,
	ContactInfo
} from './styles';
/**
 * @description This component show information about a person. 
 * Provides back navigation and options menu
 */
export const PersonInfo = withRouter(
	({
		name,
		imageUrl,
		image_url,
		imageIsShow = true,
		about,
		phone,
		email,
		history
	}) => {
		return (
			<About>
				<Navigation>
					<MaterialIcon
						onClick={() =>
							history ? history.goBack() : history.push('/app/')}
					>
						arrow_back{' '}
					</MaterialIcon>
					<MaterialIcon>more_vert</MaterialIcon>
				</Navigation>

				<Name>{name || 'name'}</Name>
				<BiographyContainer>
					<ProfilePicture
						image={imageUrl || image_url}
						isShowed={imageIsShow}
					>
						<img
							src={imageUrl || image_url}
							alt={`Profile of ${name || 'name'}`}
						/>
					</ProfilePicture>
					<Biography imageIsShow={imageIsShow}>
						{about || 'Acerca de este provedor...'}
					</Biography>
				</BiographyContainer>

				<ContactInfoContainer>
					{phone && (
						<ContactInfo>
							<MaterialIcon>contact_phone</MaterialIcon>
							<p>{phone}</p>
						</ContactInfo>
					)}
					{email && (
						<ContactInfo>
							<MaterialIcon>email</MaterialIcon>
							<p>{email}</p>
						</ContactInfo>
					)}
				</ContactInfoContainer>
			</About>
		);
	}
);
