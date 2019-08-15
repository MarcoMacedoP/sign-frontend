/*  @author: Marco Macedo
    @description: This is the component that show a product or a service. OMG    
*/
//Components
import React from "react";
//Resources
import { Container, P, Price, MoneyIcon, ArrowIcon } from "./styles";

//The component
export const ProductOrService = ({ name, description, price }) => (
  <Container>
    <strong>{name || "Service"}</strong>
    <P>{description || "This is the service/product description"}</P>
    <Price>
      <MoneyIcon>attach_money</MoneyIcon>
      {price || "99.99"} mxn
    </Price>
    <ArrowIcon>arrow_forward_ios</ArrowIcon>
  </Container>
);
