import React from "react";
import { CircularProgress } from "@material-ui/core/";
import { Container, Message } from "./styles";

interface LoadingProps {
  message?: string;
  className?: string | any;
  size?: string;
}
export const Loading: React.FC<LoadingProps> = ({
  message,
  className,
  size
}) => {
  return (
    <Container className={className}>
      {message && <Message> {message} </Message>}
      <CircularProgress size={size || "80px"} />
    </Container>
  );
};
