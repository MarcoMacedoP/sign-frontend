import React from "react";
//redux
import {connect} from "react-redux";
//components
import {List} from "../../../global/components";

function TeamsList(props) {
  return (
    <List title="Coolaboradores">
      {[1, 2, 3, 4, 5, 6].map(id => (
        <p>Elemento de la lista {id}</p>
      ))}
    </List>
  );
}

export default connect(
  null,
  null
)(TeamsList);
