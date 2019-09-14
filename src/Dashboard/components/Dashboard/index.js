import React from "react";
// components
import { DashboardItem } from "../DashboardItem";
// styled-components
import { Container } from "./styles";
// static
import iconClient from "../../static/icons/Clients.svg";
import iconProjects from "../../static/icons/Projects.svg";
import iconProviders from "../../static/icons/Providers.svg";
import iconReminders from "../../static/icons/Reminders.svg";
import iconTeams from "../../static/icons/Teams.svg";
//routes
import {
  clientsRoute,
  providersRoute,
  remindersRoute
} from "../../../global/utils/routes";

export const Dashboard = props => {
  return (
    <Container>
      <DashboardItem
        linkDirection="/404/"
        title="Proyectos"
        icon={iconProjects}
        description="Organiza, crea proyectos y controla los detalles con precisión milimétrica."
      />
      <DashboardItem
        linkDirection={clientsRoute}
        title="Clientes"
        icon={iconClient}
        description="Organiza y lleva un seguimiento de tus clientes más importantes."
      />
      <DashboardItem
        linkDirection={providersRoute}
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
        linkDirection={remindersRoute}
        title="Recordatorios"
        icon={iconReminders}
        description="¡No olvides las cosas importantes! Crea recordatorios para ti tus equipos."
      />
    </Container>
  );
};
