import { URL_BACK_GET_ALL_PRODUCT_IN_CART } from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';


export function GetallProductInCart(id){
    return apiBackEnd.get(URL_BACK_GET_ALL_PRODUCT_IN_CART + id)
}