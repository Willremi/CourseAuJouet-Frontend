import apiBackEnd from './api.Backend';
import { URL_BACK_GET_SEARCH_RESULT } from './../../shared/constants/urls/urlBackEnd';

export function getSearchResult(values) {
  return apiBackEnd.get( URL_BACK_GET_SEARCH_RESULT ,values)
}