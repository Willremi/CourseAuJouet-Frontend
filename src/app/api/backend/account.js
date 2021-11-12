import apiBackEnd from './api.Backend';
import { URL_BACK_AUTHENTICATE, URL_BACK_REGISTER, URL_BACK_VERIFY_EMAIL_USER } from './../../shared/constants/urls/urlBackEnd';

export function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values)
}

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}

export function verifyUser(token) {
return apiBackEnd.get(URL_BACK_VERIFY_EMAIL_USER + token)
}