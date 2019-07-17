import React from "react";
import Form from "./../components/Form";
import ImageLayout from "../layouts/ImageLayout";
import LoginImg from "./images/iniciar-sesion.jpg";
import FormInput from "./../components/FormInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <ImageLayout img={LoginImg} altImg="Inicia sesión">
      <h1 className="headline-four">Bienvenido de nuevo</h1>
      <Form className="Login__form">
        <FormInput
          name="Correo electronico"
          type="email"
          placeholder="example@email.com"
        />
        <FormInput name="Contraseña" type="password" placeholder="*********" />

        <button className="button">Iniciar sesión</button>
        <span className="subtitle">
          ¿Aún no tienes una cuenta?{" "}
          <Link className="link" to="/welcome">
            Registrate
          </Link>
        </span>
      </Form>
    </ImageLayout>
  );
};
export default Login;
