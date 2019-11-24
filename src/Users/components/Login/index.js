import React from "react";

import {Link} from "react-router-dom";
import {
  Button,
  ErrorMessage,
  Input
} from "../../../global/components/";
//styled-components
import {Form, Container, Picture, LoginForm, Signup} from "./styles";
import {H2} from "../../../global/styles/texts";
// Component
export const Login = ({
  handleClick,
  error,
  loading,
  handleChange,
  formValues,
  handleOnErrorClose
}) => (
  <Container>
    <Picture />
    <LoginForm>
      <H2>Bienvenido de nuevo</H2>
      <Form>
        <Input
          name="email"
          label="Correo electronico"
          type="email"
          placeholder="example@email.com"
          onChange={handleChange}
          value={formValues.email}
        />
        <Input
          name="password"
          label="Contraseña"
          type="password"
          placeholder="*********"
          onChange={handleChange}
          value={formValues.password}
          displayError={false}
        />

        <ErrorMessage error={error} onClose={handleOnErrorClose} />
        <Button
          onClick={handleClick}
          loading={loading}
          color="secondary"
        >
          Iniciar sesión
        </Button>
        <Signup>
          ¿Aún no tienes una cuenta?{" "}
          <Link to="/signup">Registrate</Link>
        </Signup>
      </Form>
    </LoginForm>
  </Container>
);
