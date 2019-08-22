import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LoginForm,
  Picture,
  Title,
  Form,
  Signup as Login
} from "../Login/styles";
import { Input } from "../../../global/components/Input";
import { Subtitle } from "./styles";
import { Button } from "../../../global/components/Button";

export const Signup = (props) => (
  <Container>
    <Picture />
    <LoginForm>
      <Title>Cuentanos un poco sobre ti</Title>
      <Subtitle>
        Antes de poner todo en marcha necesitamos conocerte.
      </Subtitle>
      <Form>
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
        <Link to="/help">Necesito ayuda para llenar un campo. </Link>
        <Button>Registrate</Button>
        <Login>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login/">Inicia sesión</Link>
        </Login>
      </Form>
    </LoginForm>
  </Container>
);
