import { URL_STRIPE_GET_CHECKOUT } from "../../shared/constants/urls/urlStripe";
import apiBackEnd from "../backend/api.Backend";

export function getStripeCheckout(id) {
    return apiBackEnd.get(URL_STRIPE_GET_CHECKOUT + id)
}