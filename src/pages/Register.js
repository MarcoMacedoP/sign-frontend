/*components*/
import React from "react";
import { Form } from "./Login/styles";
import { Input } from "../components/Input/";
import { Link } from "react-router-dom";

/*resources*/

class Register extends React.Component {
  state = {
    register : "user"
  };
  render() {
    switch (this.state.register) {
      default:
      case "user":
        return <UserRegister />;
    }
  }
}

class RegisterLayout extends React.Component {
  render() {
    let help;
    if (this.props.help) help = this.props.help;
    else help = "Necesito ayuda para llenar un campo";

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
class UserRegister extends React.Component {
  render() {
    return (
      <RegisterLayout
        headline="Cuentanos un poco sobre ti"
        subtitle="Antes de poner todo en marcha necesitamos conocerte">
        <Input
          name="Nombre (s)"
          type="text"
          placeholder="Marco Antonio"
        />
        <Input
          name="Apellido (s)"
          type="text"
          placeholder="Macedo Preciado"
        />
        <Input
          name="Correo electronico"
          type="email"
          placeholder="example@email.com"
        />
        <Input
          name="Contraseña"
          type="password"
          placeholder="**********"
        />
        <Input
          name="Repetir contraseña"
          type="password"
          placeholder="**********"
        />
      </RegisterLayout>
    );
  }
}

export default Register;
