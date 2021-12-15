import { URL_BACK_ADD_ONE_SLIDE_IN_CAROUSEL, URL_BACK_DELETE_ONE_SLIDE_IN_CAROUSEL, URL_BACK_GET_CAROUSEL } from "../../shared/constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";



export function getCarousel(){
    return apiBackEnd.get(URL_BACK_GET_CAROUSEL)
}

export function addOneSlideInCarousel(values){
    return apiBackEnd.post(URL_BACK_ADD_ONE_SLIDE_IN_CAROUSEL, values)
}

export function deleteOneSlideInCarousel(values){
    return apiBackEnd.delete(URL_BACK_DELETE_ONE_SLIDE_IN_CAROUSEL, values)
}