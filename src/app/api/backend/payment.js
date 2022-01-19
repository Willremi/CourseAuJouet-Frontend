import apiBackEnd from './api.Backend';
import { URL_BACK_END_PAYMENT } from './../../shared/constants/urls/urlBackEnd';

export function CheckoutPayment(values) {
    return apiBackEnd.post(URL_BACK_END_PAYMENT, values)
}

