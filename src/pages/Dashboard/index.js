import React from "react";
import { Title, Container, Card } from "./styles";
export const Dashboard = (props) => (
  <Container>
    <Title>Dashboard</Title>
    <Card to="/proyectos/">Proyectos</Card>
    <Card to="proveedores/">Proveedores</Card>
    <Card to="/clientes/">Clientes</Card>
    <Card to="/equipos/">Equipos</Card>
    <Card to="/recordatorios/">Recordatorios</Card>
  </Container>
);
