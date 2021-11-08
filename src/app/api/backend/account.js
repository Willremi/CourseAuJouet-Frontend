
import apiBackEnd from './api.Backend';
import { URL_BACK_AUTHENTICATE, URL_BACK_REGISTER } from './../../shared/constants/urls/urlBackEnd';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}

export function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values)
}