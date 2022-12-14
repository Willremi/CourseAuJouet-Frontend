import apiBackEnd from './api.Backend';
import { URL_BACK_AUTHENTICATE, URL_BACK_REGISTER, URL_BACK_RESET_PASSWORD, URL_BACK_VALID_RESET_PASSWORD, URL_BACK_VERIFY_EMAIL_USER, URL_BACK_LOGIN_FACEBOOK, URL_BACK_GET_ONE_USER, URL_BACK_LOGIN_GOOGLE, URL_BACK_CHANGE_PASSWORD,URL_EDIT_PROFIL } from './../../shared/constants/urls/urlBackEnd';

export function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values)
}

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}

export function verifyUser(token) {
return apiBackEnd.get(URL_BACK_VERIFY_EMAIL_USER + token)
}

export function resetPassword(value) {
    return apiBackEnd.post(URL_BACK_RESET_PASSWORD, value)
}

export function validResetPassword(id, values) {
    return apiBackEnd.post(URL_BACK_VALID_RESET_PASSWORD + id, values)
}

export function editProfil(id, values) {
    return apiBackEnd.patch(URL_EDIT_PROFIL+ id, values)
}
export function changePassword(values){
    return apiBackEnd.post(URL_BACK_CHANGE_PASSWORD,values)
}

export function GetOneUser(id){
    return apiBackEnd.get(URL_BACK_GET_ONE_USER + id)
}

export function connectWithGoogle(values) {
    return apiBackEnd.post(URL_BACK_LOGIN_GOOGLE, values)
}

export function connectWithFacebook(values) {
    return apiBackEnd.post(URL_BACK_LOGIN_FACEBOOK, values)
}
