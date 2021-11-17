
import apiBackEnd from './api.Backend';
import { URL_BACK_AUTHENTICATE, URL_BACK_GET_PRODUCT } from './../../shared/constants/urls/urlBackEnd';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}

export function getProduct() {
    return apiBackEnd.get(URL_BACK_GET_PRODUCT);
}