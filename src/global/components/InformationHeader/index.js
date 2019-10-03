//Components
import React from "react";
import {Redirect} from "react-router-dom";
import {ToastMenu} from "../ToastMenu";
import {Icon} from "../Icon";
//hooks
import {useLastLocation} from "react-router-last-location";
import {useHandleState} from "../../hooks/useHandleState";
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
 * @param {*}job shows a job title with an icon
 *
 * @param {*} options an array of options to be displayed on ToastMenu when user click more icon
 * @param {options} onClick function to be executed with click in option
 * @param {options} title the text to be displayed on interface. Describe de option.
 * @param {options} icon the icon to be showed in option
 */
export const InformationHeader = ({
  title,
  imageUrl,
  image_url,
  imageIsShow = true,
  about,
  phone,
  email,
  date,
  job,
  options = [
    {
      onClick: function() {},
      title: "",
      icon: ""
    }
  ]
}) => {
  const {state, toggleStateValue} = useHandleState({
    goBack: false,
    toastMenuIsShowed: false
  });
  const goLastPage = () => toggleStateValue("goBack");
  const toggleToastMenu = () => toggleStateValue("toastMenuIsShowed");

  const lastLocation = useLastLocation() || APP_HOME_ROUTE;
  return (
    <About>
      {state.goBack && <Redirect to={lastLocation} />}
      <Navigation>
        <Icon icon="arrow_back" onClick={goLastPage} />
        <Icon icon="more_vert" onClick={toggleToastMenu} />
        <ToastMenu
          isShowed={state.toastMenuIsShowed}
          onClose={toggleToastMenu}
          menuItems={options || []}
        />
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
        {job && (
          <DateContainer>
            <Icon hasAnimatedClick={false} icon="work" />
            <Date>{job}</Date>
          </DateContainer>
        )}
      </ContactInfoContainer>
    </About>
  );
};
