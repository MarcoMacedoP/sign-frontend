//Components
import React from "react";
import {withRouter} from "react-router-dom";
import {Icon} from "../Icon";
//Styled components
import {MaterialIcon} from "../../styles/foundations/MaterialIcon";
import {
  About,
  Navigation,
  Name,
  BiographyContainer,
  Biography,
  ProfilePicture,
  ContactInfoContainer,
  ContactInfo,
  Date,
  DateContainer
} from "./styles";
/**
 * @description This component show a header with information about something like a provider, client or a project.
 * Provides back navigation and options menu
 */
export const InformationHeader = withRouter(
  ({
    title,
    imageUrl,
    image_url,
    imageIsShow = true,
    about,
    phone,
    email,
    date,
    history
  }) => {
    return (
      <About>
        <Navigation>
          <MaterialIcon
            onClick={() =>
              history ? history.goBack() : history.push("/app/")
            }
          >
            arrow_back{" "}
          </MaterialIcon>
          <MaterialIcon>more_vert</MaterialIcon>
        </Navigation>

        <Name>{title || "title"}</Name>
        <BiographyContainer>
          <ProfilePicture
            image={imageUrl || image_url}
            isShowed={imageIsShow}
          >
            <img
              src={imageUrl || image_url}
              alt={`Profile of ${title || "name"}`}
            />
          </ProfilePicture>
          <Biography imageIsShow={imageIsShow}>
            {about || "Acerca de ..."}
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
          {date && (
            <DateContainer>
              <Icon hasAnimatedClick={false} icon="timer" />
              <Date>{date}</Date>
            </DateContainer>
          )}
        </ContactInfoContainer>
      </About>
    );
  }
);
