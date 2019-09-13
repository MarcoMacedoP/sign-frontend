import { getToken } from './getToken'
/**
 * Check if user is loged from token
 * @returns Boolean with result
 */
export function userIsLoged () {
  const userLoged = getToken()
  if (userLoged) return true
  else return false
}
