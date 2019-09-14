export const landingRoute = "/";
export const loginRoute = "/login";
export const signupRoute = "/signup";

export const appHomeRoute = "/app";
//providers
export const providersRoute = `${appHomeRoute}/providers/`;
export const providerPageRoute = `${providersRoute}:providerId`;
//clients
export const clientsRoute = `${appHomeRoute}/clients/`;
export const addClientRoute = `${clientsRoute}add`;
export const clientPageRoute = `${clientsRoute}:clientId`;
//reminders
export const remindersRoute = `${appHomeRoute}/reminders/`;
export const reminderPageRoute = `${remindersRoute}:reminderId`;
