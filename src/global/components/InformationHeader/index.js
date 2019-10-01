//Components
import React, {useState} from "react";
import {Redirect} from "react-router-dom";
//hooks
import {useLastLocation} from "react-router-last-location";
import {Icon} from "../Icon";
//Styled components
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
//routes
import {APP_HOME_ROUTE} from "../../utils/routes";

/**
 * @description This component show a header with information about something like a provider, client or a project.
 * Provides back navigation and options menu
 * @param  {*} title the main title to be showed
 * @param {*} imageUrl the url to the image to be showed
 * @param {*}imageIsShow the boolean that condition image to be showed.
 * @param {*} about the information to be desplayed
 * @param {*} phone show a phone number with an icon
 * @param {*}email,show an email direction with an icon
 * @param {*}date shows the current date with an icon
 */
export const InformationHeader = ({
  title,
  imageUrl,
  image_url,
  imageIsShow = true,
  about,
  phone,
  email,
  date
}) => {
  const [goBack, setGoBack] = useState(false);
  const lastLocation = useLastLocation() || APP_HOME_ROUTE;
  return (
    <About>
      {goBack && <Redirect to={lastLocation} />}
      <Navigation>
        <Icon icon="arrow_back" onClick={() => setGoBack(true)} />
        <Icon icon="more_vert" />
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
            <Icon icon="contact_phone" hasAnimatedClick={false} />
            <p>{phone}</p>
          </ContactInfo>
        )}
        {email && (
          <ContactInfo>
            <Icon icon="email" hasAnimatedClick={false} />
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
};
