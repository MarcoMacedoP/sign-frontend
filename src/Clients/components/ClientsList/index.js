// Components
import React from "react";
import {Link} from "react-router-dom";
import {LongCard, List} from "../../../global/components";

// styled-Components
import {LongList} from "../../../global/styles/Lists";
//utils
import {CLIENTS_ROUTE} from "../../../global/utils/routes";

export const ClientsList = () => (
  <List title="Clientes">
    <LongList>
      {[1, 2, 3, 4].map(id => (
        <Link to={`${CLIENTS_ROUTE}${id}`} key={id}>
          <LongCard />
        </Link>
      ))}
    </LongList>
  </List>
);
