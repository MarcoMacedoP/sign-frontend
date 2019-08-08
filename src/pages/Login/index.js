import React from "react";

import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import {
  Form,
  Container,
  Picture,
  LoginForm,
  Title,
  Button,
  Signup
} from "./styles";

export const Login = () => {
  return (
    <Container>
      <Picture />
      <LoginForm>
        <Title>Bienvenido de nuevo</Title>
        <Form>
          <Input
            name="Correo electronico"
            type="email"
            placeholder="example@email.com"
          />
          <Input
            name="Contraseña"
            type="password"
            placeholder="*********"
          />

          <Button>Iniciar sesión</Button>
          <Signup>
            ¿Aún no tienes una cuenta?{" "}
            <Link to="/signup">Registrate</Link>
          </Signup>
        </Form>
      </LoginForm>
    </Container>
  );
};
