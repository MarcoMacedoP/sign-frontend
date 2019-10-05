import React from "react";
//redux
import {connect} from "react-redux";
//components
import {List, LongCard} from "../../../global/components";
//styled-components
import {TeamListItem} from "./styles";

function TeamsList(props) {
  return (
    <List title="Coolaboradores">
      {[1, 2, 3, 4, 5, 6].map(id => (
        <TeamListItem key={id}>
          <LongCard title={`Elemento de la lista ${id}`} />
        </TeamListItem>
      ))}
    </List>
  );
}

export default connect(
  null,
  null
)(TeamsList);
