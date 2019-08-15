/*  @author: Marco Macedo
    @description: This is is the page that shows the information about a provider.
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
  ({ name, image, description, phone, email, history }) => {
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
          <ProfilePicture image={image}>
            <img src={image} alt={`Profile of ${name || "name"}`} />
          </ProfilePicture>
          <Biography>
            {description ||
              "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse "}
          </Biography>
        </BiographyContainer>

        <ContactInfoContainer>
          <ContactInfo>
            <MaterialIcon>contact_phone</MaterialIcon>
            {phone || "33256589"}
          </ContactInfo>
          <ContactInfo>
            <MaterialIcon>email</MaterialIcon>
            {email || "providder@example.com"}
          </ContactInfo>
        </ContactInfoContainer>
      </About>
    );
  }
);
