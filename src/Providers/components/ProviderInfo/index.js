/*  @author: Marco Macedo
    @about: This is is the page that shows the information about a provider.
    This page opens modals for CRUD actions with the provider.
    */

//Components
import React from "react";
import { withRouter } from "react-router-dom";

//Styled components
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";
import {
  About,
  BackIcon,
  MoreIcon,
  Name,
  BiographyContainer,
  Biography,
  ProfilePicture,
  ContactInfoContainer,
  ContactInfo
} from "./styles";

export const ProviderInfo = withRouter(
  ({ name, image_url, about, phone, email, history }) => {
    return (
      <About>
        <BackIcon
          onClick={() =>
            history ? history.goBack() : history.push("/app/")}>
          arrow_back{" "}
        </BackIcon>
        <MoreIcon>more_vert</MoreIcon>

        <Name>{name || "Proveedor"}</Name>
        <BiographyContainer>
          <ProfilePicture image={image_url}>
            <img
              src={image_url}
              alt={`Profile of ${name || "name"}`}
            />
          </ProfilePicture>
          <Biography>
            {about || "Acerca de este provedor..."}
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
