import React from "react";

export const ErrorMessage = ({error}) => (
  <>{error ? <div>{error}</div> : null}</>
);
