/*  @author: Marco Macedo
    @description: This is is the page that shows the information about a provider.
    This page opens modals for CRUD actions with the provider.
    */

//Components
import React from "react";
import { ProductOrService } from "../ProductOrService";
import { AddButton } from "../../../global/components/AddButton";

//Styled components
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";
import {
  Container,
  About,
  BackIcon,
  MoreIcon,
  Name,
  BiographyContainer,
  Biography,
  ProfilePicture,
  ContactInfoContainer,
  ContactInfo,
  Services,
  ServicesList
} from "./styles";

export const ProviderInfo = ({
  name,
  image,
  description,
  phone,
  email
}) => {
  return (
    <Container>
      {/*About the provider*/}
      <About>
        {/*Icons*/}
        <BackIcon>arrow_back</BackIcon>
        <MoreIcon>more_vert</MoreIcon>
        {/*Info*/}
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
      <Services>
        <Name>Servicios</Name>
        <ServicesList>
          {[ 1, 2, 3, 4, 5 ].map(() => <ProductOrService />)}
        </ServicesList>
        <AddButton position="static" />
      </Services>
    </Container>
  );
};
