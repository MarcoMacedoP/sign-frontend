/*components*/
import React from "react";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import ImageLayout from "../layouts/ImageLayout";
/*resources*/
import "./styles/Register.scss";
import RegisterImg from "./images/registrarse.jpg";
import EmpleadoImg from "./images/empleado.png";
import GerenteImg from "./images/gerente.png";
import AdminImg from "./images/jefe.png";

class Register extends React.Component {
  state = {
    register : "user"
    // register : "user-type"
    // register : "enterprise-selection"
    // register : "enterprise-register"
    // register : "enterprise-location"
  };
  render() {
    switch (this.state.register) {
      default:
      case "user":
        return <UserRegister />;
      case "user-type":
        return <TypeOfUSer />;
      case "enterprise-selection":
        return <EnterpriseSelection />;
      case "enterprise-register":
        return <EnterpriseRegister />;
      case "enterprise-location":
        return <EnterpriseLocation />;
    }
  }
}

class RegisterLayout extends React.Component {
  render() {
    let help;
    if (this.props.help) help = this.props.help;
    else help = "Necesito ayuda para llenar un campo";

    return (
      <ImageLayout img={RegisterImg}>
        <h1 className="headline-four">{this.props.headline}</h1>
        <span>{this.props.subtitle}</span>
        <Form className="Login__form">
          {this.props.children}
          <Link to="/help/register" className="link caption">
            {help}
          </Link>
          <Link className="button" to="#">
            siguiente
          </Link>
          <span className="subtitle">
            ¿Ya tienes una cuenta?{" "}
            <Link className="link" to="/login">
              Inicia sesión
            </Link>
          </span>
        </Form>
      </ImageLayout>
    );
  }
}
class UserRegister extends React.Component {
  render() {
    return (
      <RegisterLayout
        headline="Cuentanos un poco sobre ti"
        subtitle="Antes de poner todo en marcha necesitamos conocerte"
      >
        <FormInput name="Nombre (s)" type="text" placeholder="Marco Antonio" />
        <FormInput
          name="Apellido (s)"
          type="text"
          placeholder="Macedo Preciado"
        />
        <FormInput
          name="Correo electronico"
          type="email"
          placeholder="example@email.com"
        />
        <FormInput name="Contraseña" type="password" placeholder="**********" />
        <FormInput
          name="Repetir contraseña"
          type="password"
          placeholder="**********"
        />
      </RegisterLayout>
    );
  }
}
class TypeOfUSer extends React.Component {
  state = {
    user : ""
  };

  handleClick = (e) => {
    this.setState({
      user : e.target.value
    });
  };

  user(name, img) {
    return (
      <div className="TypeOfUSer">
        <div className="TyoeOfUser__image-container">
          <img alt={name} src={img} />
        </div>
        <div className="TypeOfUSer__form">
          <label className="small" for={name}>
            Seleccionar {name}
          </label>
          <input
            type="radio"
            name="user"
            id={name}
            value={name}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <RegisterLayout
        headline="Selecciona un tipo de perfil"
        subtitle="Esto nos ayudará a ofrecerte las mejores herramientas"
      >
        <div className="TypeOfUSer__container">
          {this.user("empleado", EmpleadoImg)}
          {this.user("gerente", GerenteImg)}
          {this.user("jefe", AdminImg)}
        </div>
      </RegisterLayout>
    );
  }
}
class EnterpriseSelection extends React.Component {
  render() {
    return (
      <ImageLayout img={RegisterImg}>
        <h1 className="headline-four">Selección de empresa</h1>
        <span>Unete a una empresa existente o registra una nueva empresa</span>
        <Form className="Login__form">
          <FormInput
            name="Codigo de la empresa"
            type="numer"
            placeholder="0409"
          />
          <Link className="button " to="#">
            unirse
          </Link>
          <Link
            className="link caption EnterpriseSelection__label"
            to="/help/register#code"
          >
            No tengo el código de una empresa
          </Link>
          <div className="EnterpriseSelection__create-container">
            <div class="alternative-choice">
              <div class="alternative-choice__line" />
              o
              <div class="alternative-choice__line"> </div>
            </div>
            <span className="button secondary">registra una empresa</span>
          </div>
        </Form>
      </ImageLayout>
    );
  }
}
class EnterpriseRegister extends React.Component {
  render() {
    return (
      <RegisterLayout
        headline="Cuentanos sobre tu empresa"
        subtitle="Esto nos ayudará a ofrecerte las mejores herramientas"
      >
        <FormInput
          name="Nombre de la empresa"
          type="text"
          placeholder="Popotes metalicos"
        />
        <FormInput
          name="Numero de establecimientos"
          type="text"
          placeholder="3"
        />
        <FormInput name="Pais" type="text" placeholder="México" />
        <FormInput name="Estado" type="text" placeholder="Jalisco" />
        <FormInput name="Ciudad" type="text" placeholder="Guadalajara" />
      </RegisterLayout>
    );
  }
}
class EnterpriseLocation extends React.Component {
  render() {
    return (
      <RegisterLayout
        headline="Cuentanos sobre tu empresa"
        subtitle="Esto nos ayudará a ofrecerte las mejores herramientas"
      >
        <FormInput
          name="Dirección de la empresa"
          type="text"
          placeholder="Av. Reforma col Lomas del Oriente"
        />
        <FormInput name="Número exterior" type="text" placeholder="345" />
        <FormInput name="Número interior" type="text" placeholder="C-5" />
        <FormInput name="Código postal" type="text" placeholder="22403" />
      </RegisterLayout>
    );
  }
}
export default Register;
