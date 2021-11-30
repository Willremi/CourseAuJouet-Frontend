import { getToken, getPayloadToken } from './tokenServices';

/**
 * To get all the roles of the current user
 * 
 * @return {Array} roles of the current user
 * @author Peter Mollet
 */
export function accountRoles() {
    const payload = getPayloadToken()
    return payload.role[0].role_name.split(",")
}

/**
 * To get the login of the current user
 * 
 * @return {string} login of the current user
 * @author Peter Mollet
 */
export function accountLogin(){
    const payload = getPayloadToken()
    return payload.email
}

export function accountId(){
    const payload = getPayloadToken()
    return payload.userId
}

export function hasRole(role) {
    return accountRoles().includes(role)
}

/**
 * To check if the current user is authenticated
 * Check the token, and it's validity
 * 
 * @return {boolean} true if user is authenticated
 * @author Peter Mollet
 */

export function isAuthenticated() {
    try{
        const token = getToken()
        const payload = getPayloadToken()
        const roles = payload.role[0].role_name.split(",")
        const expirationDate = payload.exp
        const login = payload.email
        const dateNow = new Date();
        return token
            && roles.length > 0
            && login
            && expirationDate < dateNow.getTime()
    } catch {
        return false
    }
}

