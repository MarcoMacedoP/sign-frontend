import React from "react";
class FormInput extends React.Component {
  /*
    Este componente recibe como pros: 
    name :  usado para el contenido de los labels y el name de los inputs, el label se relaciona
    con el input mediante el
    type:  usado para definir el tipo de input
    placeholder: usado para el placeholder el input
    */
  render() {
    return (
      <React.Fragment>
        <label for={this.props.name} className="subtitle">
          {this.props.name}
        </label>
        <input
          className="input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
      </React.Fragment>
    );
  }
}
export default FormInput;
