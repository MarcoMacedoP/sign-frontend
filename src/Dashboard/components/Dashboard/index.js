import React from "react";
// components
import { DashboardItem } from "../DashboardItem";
// styled-components
import { Container } from "./styles";
// static
import iconClient from "../../../global/static/icons/Clients.svg";
import iconProjects from "../../../global/static/icons/Projects.svg";
import iconProviders from "../../../global/static/icons/Providers.svg";
import iconReminders from "../../../global/static/icons/Reminders.svg";
import iconTeams from "../../../global/static/icons/Teams.svg";
//routes
import {
  CLIENTS_ROUTE,
  PROVIDERS_ROUTE,
  REMINDERS_ROUTE,
  PROJECTS_ROUTE
} from "../../../global/utils/routes";

export const Dashboard = () => {
  return (
    <Container>
      <DashboardItem
        linkDirection={PROJECTS_ROUTE}
        title="Proyectos"
        icon={iconProjects}
        description="Organiza, crea proyectos y controla los detalles con precisión milimétrica."
      />
      <DashboardItem
        linkDirection={CLIENTS_ROUTE}
        title="Clientes"
        icon={iconClient}
        description="Organiza y lleva un seguimiento de tus clientes más importantes."
      />
      <DashboardItem
        linkDirection={PROVIDERS_ROUTE}
        title="Proveedores"
        icon={iconProviders}
        description="Administra a tus proveedores y los servicisos o productos que te ofrecen."
      />
      <DashboardItem
        linkDirection="/404/"
        title="Colaboradores"
        icon={iconTeams}
        description="Crea equipos de trabajo con diferentes usuarios."
      />
      <DashboardItem
        linkDirection={REMINDERS_ROUTE}
        title="Recordatorios"
        icon={iconReminders}
        description="¡No olvides las cosas importantes! Crea recordatorios para ti tus equipos."
      />
    </Container>
  );
};
