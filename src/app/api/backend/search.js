import apiBackEnd from './api.Backend';
import { URL_BACK_AUTO_COMPLETE_SEARCH, URL_BACK_GET_AUTOCOMPLETION_PRODUCT, URL_BACK_GET_SEARCH_RESULT } from './../../shared/constants/urls/urlBackEnd';

export function getSearchResult(values) {
  return apiBackEnd.post( URL_BACK_GET_SEARCH_RESULT ,values)
}

export function autoCompleteSearch(values) {
  return apiBackEnd.get( URL_BACK_AUTO_COMPLETE_SEARCH + values)
}

export function GetAutoCompletionProduct(values) {
  return apiBackEnd.post( URL_BACK_GET_AUTOCOMPLETION_PRODUCT, values)
}