export const LANDING_ROUTE = "/";
export const APP_HOME_ROUTE = "/app";
//Users
export const LOGIN_ROUTE = "/login";
export const SIGNUP_ROUTE = "/signup";
export const USER_PAGE = `${APP_HOME_ROUTE}/user/`;
export const EDIT_USER = `${USER_PAGE}edit/`;
//providers
export const PROVIDERS_ROUTE = `${APP_HOME_ROUTE}/providers`;
export const ADD_PROVIDER_ROUTE = `${PROVIDERS_ROUTE}/add`;
export const PROVIDER_PAGE_ROUTE = `${PROVIDERS_ROUTE}/:providerId`;
//clients
export const CLIENTS_ROUTE = `${APP_HOME_ROUTE}/clients/`;
export const ADD_CLIENT_ROUTE = `${CLIENTS_ROUTE}add`;
export const EDIT_CLIENT_ROUTE = `${CLIENTS_ROUTE}edit`;
export const CLIENT_PAGE_ROUTE = `${CLIENTS_ROUTE}:clientId`;
//reminders
export const REMINDERS_ROUTE = `${APP_HOME_ROUTE}/reminders/`;
//projects
export const PROJECTS_ROUTE = `${APP_HOME_ROUTE}/projects/`;
export const ADD_PROJECTS_ROUTE = `${PROJECTS_ROUTE}add/`;
export const PROJECTS_PAGE_ROUTE = `${PROJECTS_ROUTE}:projectId/`;
//teams
export const TEAMS_LIST = `${APP_HOME_ROUTE}/teams/`;
export const TEAM_PAGE = `${TEAMS_LIST}:teamId`;
export const ADD_TEAM = `${TEAMS_LIST}add/`;
