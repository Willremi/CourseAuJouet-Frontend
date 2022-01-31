import { URL_BACK_GET_NEW_PRODUCT, URL_BACK_GET_POPULAR_PRODUCT, URL_BACK_GET_ALL_PRODUCT, URL_BACK_ADD_NEW_PRODUCT, URL_BACK_MODIFY_PRODUCT, URL_BACK_DELETE_PRODUCT, URL_BACK_DELETE_MANY_PRODUCTS} from '../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function GetNewProduct(){
    return apiBackEnd.get(URL_BACK_GET_NEW_PRODUCT)
}

export function getAllProducts(){
    return apiBackEnd.get(URL_BACK_GET_ALL_PRODUCT)
}

export function GetPopularProduct(){
    return apiBackEnd.get(URL_BACK_GET_POPULAR_PRODUCT)
}

export function PostNewProduct(values){
    return apiBackEnd.post(URL_BACK_ADD_NEW_PRODUCT, values)
}

export function PostModifyProduct(values){
    return apiBackEnd.post(URL_BACK_MODIFY_PRODUCT, values)
}

export function deleteProduct(values){
    return apiBackEnd.post(URL_BACK_DELETE_PRODUCT, values)
}

export function deleteManyProducts(values){
    console.log(values);
    return apiBackEnd.post(URL_BACK_DELETE_MANY_PRODUCTS, values)
}
