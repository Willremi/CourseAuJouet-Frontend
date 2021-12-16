import { URL_BACK_GET_NEW_PRODUCT } from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';
import { URL_BACK_GET_ALL_PRODUCT } from './../../shared/constants/urls/urlBackEnd';

export function GetNewProduct(){
    return apiBackEnd.get(URL_BACK_GET_NEW_PRODUCT)
}

export function getAllProducts(){
    return apiBackEnd.get(URL_BACK_GET_ALL_PRODUCT)
}

