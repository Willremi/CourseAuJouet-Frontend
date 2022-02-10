import apiBackEnd from './api.Backend';
import { URL_BACK_END_REGISTER_ORDER, URL_BACK_END_GET_ONE_ORDER } from '../../shared/constants/urls/urlBackEnd';

export function registerOrder(values){
   return apiBackEnd.post(URL_BACK_END_REGISTER_ORDER, values)
}

export function getOneOrder(id){
   return apiBackEnd.get(URL_BACK_END_GET_ONE_ORDER + id)
}