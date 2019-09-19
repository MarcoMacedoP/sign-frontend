import React from "react";

//image
import defaultImage from "../../static/img/no_data.svg";
//styled-components}
import {
  Img,
  Picture,
  Container,
  Title,
  Message,
  CallToAction
} from "./styles";
//component
export const SmallEmptyState = ({
  message,
  image = defaultImage,
  children,
  callToAction
}) => (
  <Container>
    <Title>Uhm...</Title>
    <Picture>
      <Img src={image} alt={message} />
    </Picture>
    <Message>{message}</Message>
    <CallToAction>{callToAction}</CallToAction>
    {children}
  </Container>
);
