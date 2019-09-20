// Components
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../../global/components/Input";
import { Button } from "../../../global/components/Button";
import { ErrorToast } from "../../../global/components/ErrorToast";
// Styled-components
import {
  Container,
  LoginForm,
  Picture,
  Form,
  Signup as Login
} from "../Login/styles";
import { Subtitle } from "./styles";
import { H2 } from "../../../global/styles/texts";

// functions
import { redirecToAppIfUserIsLoged } from "../../../global/functions/redirectToApp";
// The component
export const Signup = ({
  handleClick,
  error,
  loading,
  setError,
  handleChange,
  formValues
}) => (
  <>
    {redirecToAppIfUserIsLoged()}

    <Container>
      <Picture />
      <LoginForm>
        <H2>Cuentanos un poco sobre ti</H2>
        <Subtitle>
          Antes de poner todo en marcha necesitamos conocerte.
        </Subtitle>
        <Form>
          <Input
            onChange={handleChange}
            name="name"
            label="Nombre (s)"
            type="text"
            placeholder="Marco Antonio"
            value={formValues.name}
          />
          <Input
            onChange={handleChange}
            name="lastname"
            label="Apellido (s)"
            type="text"
            placeholder="Macedo Preciado"
            value={formValues.lastname}
          />
          <Input
            onChange={handleChange}
            name="email"
            label="Correo electronico"
            type="email"
            placeholder="example@email.com"
            value={formValues.email}
          />
          <Input
            onChange={handleChange}
            label="Contraseña"
            name="password"
            type="password"
            placeholder="**********"
            value={formValues.password}
          />
          <Input
            onChange={handleChange}
            name="password_repeat"
            label="Repetir contraseña"
            type="password"
            placeholder="**********"
            value={formValues.password_repeat}
          />

          <Button onClick={handleClick} loading={loading}>
            Registrate
          </Button>
          <Login>
            ¿Ya tienes una cuenta? <Link to="/login/">Inicia sesión</Link>
          </Login>
        </Form>
        <ErrorToast error={error} handleClose={() => setError(null)} />
      </LoginForm>
    </Container>
  </>
);
