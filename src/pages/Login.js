import React from "react";
import Form from "./../components/Form";

import FormInput from "./../components/FormInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="headline-four">Bienvenido de nuevo</h1>
      <Form className="Login__form">
        <FormInput
          name="Correo electronico"
          type="email"
          placeholder="example@email.com"
        />
        <FormInput
          name="Contraseña"
          type="password"
          placeholder="*********"
        />

        <button className="button">Iniciar sesión</button>
        <span className="subtitle">
          ¿Aún no tienes una cuenta?{" "}
          <Link className="link" to="/welcome">
            Registrate
          </Link>
        </span>
      </Form>
    </div>
  );
};
export default Login;
