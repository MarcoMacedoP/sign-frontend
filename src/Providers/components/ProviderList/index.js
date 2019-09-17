import React from "react";
// Components

import { LongCard, PictureCard, List } from "../../../global/components/";

import { Link } from "react-router-dom";
// Styled Components
import { BigList, LongList } from "../../../global/styles/Lists";

export const ProviderList = ({ data }) => {
  let bigProviders = data.slice(0, 4);
  let longProviders = data.slice(4);
  const onClick = () => console.log("Add provider");
  return (
    <List title="Proveedores" onClick={onClick}>
      <BigList>
        {bigProviders.map(({ id, name, lastname, image_url, about }) => (
          <Link key={id} to={`/app/providers/${id}`}>
            <PictureCard
              title={`${name} ${lastname}`}
              picture={image_url}
              description={about}
            />
          </Link>
        ))}
      </BigList>

      <LongList>
        {longProviders.map(({ id, name, lastname, image_url, about }) => (
          <Link key={id} to={`/app/providers/${id}`}>
            <LongCard
              title={`${name} ${lastname}`}
              picture={image_url}
              description={about}
            />
          </Link>
        ))}
      </LongList>
    </List>
  );
};
