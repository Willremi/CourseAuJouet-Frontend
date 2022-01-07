import { URL_BACK_GET_NEW_PRODUCT, URL_BACK_GET_POPULAR_PRODUCT, URL_BACK_GET_ALL_PRODUCT, URL_BACK_ADD_NEW_PRODUCT, URL_BACK_MODIFY_PRODUCT, URL_DELETE_ONE_STOCKED_IMAGE} from '../../shared/constants/urls/urlBackEnd';
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

export function deleteOneStockedImage(values){
    return apiBackEnd.put(URL_DELETE_ONE_STOCKED_IMAGE, values)
}
