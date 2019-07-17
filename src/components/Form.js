import React from "react";
import "./styles/Form.scss";
class Form extends React.Component {
  render() {
    return <form className="Form">{this.props.children}</form>;
  }
}

export default Form;
