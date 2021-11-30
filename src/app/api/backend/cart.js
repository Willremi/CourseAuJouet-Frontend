import { URL_BACK_GET_ALL_PRODUCT_IN_CART, URL_BACK_REMOVE_ONE_PRODUCT_IN_CART } from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';


export function GetallProductInCart(userId){
    return apiBackEnd.get(URL_BACK_GET_ALL_PRODUCT_IN_CART + userId)
}

export function RemoveOneProductInCart(values){
    return apiBackEnd.patch(URL_BACK_REMOVE_ONE_PRODUCT_IN_CART, values)
}