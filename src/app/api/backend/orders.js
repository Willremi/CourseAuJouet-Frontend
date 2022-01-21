import apiBackEnd from './api.Backend';
import { URL_BACK_END_REGISTER_ORDER } from '../../shared/constants/urls/urlBackEnd';

export function registerOrder(values){
   return apiBackEnd.post(URL_BACK_END_REGISTER_ORDER, values)
}
