import React from 'react'

import { Input } from '../../../global/components/Input/'
import { Link } from 'react-router-dom'
import { Form, Container, Picture, LoginForm, Title, Signup } from './styles'

import { Button } from '../../../global/components/Button'
import { ErrorToast } from '../../../global/components/ErrorToast'
// functions
import { redirecToAppIfUserIsLoged } from '../../../global/functions/redirectToApp'
// UI component
export const Login = ({
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
        <Title>Bienvenido de nuevo</Title>
        <Form>
          <Input
            name='email'
            label='Correo electronico'
            type='email'
            placeholder='example@email.com'
            onChange={handleChange}
            value={formValues}
          />
          <Input
            name='password'
            label='Contraseña'
            type='password'
            placeholder='*********'
            onChange={handleChange}
            value={formValues}
          />

          <Button onClick={handleClick} loading={loading} color='secondary'>
            Iniciar sesión
          </Button>
          <Signup>
            ¿Aún no tienes una cuenta? <Link to='/signup'>Registrate</Link>
          </Signup>
        </Form>
        <ErrorToast error={error} handleClose={() => setError(null)} />
      </LoginForm>
    </Container>
  </>
)
