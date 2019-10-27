import React from "react";
//components
import {Redirect} from "react-router-dom";
import {Input, AddPage} from "../../../global/components";
//hooks
import {useEffect, useState} from "react";
//utils
import {CLIENTS_ROUTE} from "../../../global/utils/routes";

export function ClientFormBase({
  formValues,
  onInputChange,
  onSubmit,
  setError,
  error,
  isLoading,
  onErrorClose,
  title
}) {
  const validateFields = () => {
    if (formValues.name.length < 4) {
      setError("Nombre demasiado corto");
      return false;
    } else if (formValues.lastname.length < 4) {
      setError("Apellido demasiado corto");
      return false;
    } else if (formValues.email.length < 5) {
      setError("Email invalido");
    } else if (
      !formValues.phone.match(/^\d+$/) ||
      formValues.phone.length < 8
    ) {
      setError(
        "El telefono solo puede ser númerico y debe tener 8 digitos minimo"
      );
      return false;
    } else {
      return true;
    }
  };

  const [submitSended, setSubmitSended] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (validateFields()) {
      setSubmitSended(true);
      onSubmit();
    }
  };

  const [isRedirect, setIsRedirect] = useState(false);
  useEffect(() => {
    if (!error && submitSended && !isLoading) {
      setIsRedirect(true);
    }
  }, [error, submitSended, isLoading]);

  return (
    <AddPage
      onErrorClose={onErrorClose}
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      title={title}
      aboutTitle="Sobre los clientes"
      about="Tener tu lista de clientes te permite tener un seguimiento exacto para cada uno"
    >
      <Input
        label="Nombre (s)"
        placeholder="María"
        name="name"
        value={formValues.name}
        onChange={onInputChange}
      />
      <Input
        label="Apellido (s)"
        placeholder="Fernandez"
        name="lastname"
        value={formValues.lastname}
        onChange={onInputChange}
      />
      <Input
        label="Email"
        placeholder="test@example.com"
        name="email"
        value={formValues.email}
        onChange={onInputChange}
        type="email"
      />
      <Input
        label="Télefono"
        placeholder="222335774"
        name="phone"
        value={formValues.phone}
        onChange={onInputChange}
        type="number"
      />
      {isRedirect && <Redirect to={CLIENTS_ROUTE} />}
    </AddPage>
  );
}
