import { Redirect } from 'react-router-dom';
import React from 'react';
import { appHomeRoute } from '../utils/routes';
import { userIsLoged } from './userIsLoged';

export function redirecToApp() {
	return <Redirect to={appHomeRoute} />;
}
export function redirecToAppIfUserIsLoged() {
	if (userIsLoged()) {
		redirecToApp();
	}
}
