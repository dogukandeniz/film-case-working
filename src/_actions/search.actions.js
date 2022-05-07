import { searchConstants } from '../_constants';


export const initSearchFilterRequestAction = () =>{
    return { type: searchConstants.SEARCH_FILTER_INIT_REQUEST }
}
export const initSearchFilterSuccessAction = (result) =>{
    return { type: searchConstants.SEARCH_FILTER_INIT_SUCCESS,result }
}
export const initSearchFilterFailureAction = (errorMsg) =>{
    return { type: searchConstants.SEARCH_FILTER_INIT_FAILURE,errorMsg }
}

export const searchFilterRequestAction = (filterObj) =>{
     return { type: searchConstants.SEARCH_FILTER_REQUEST,filterObj }
}
export const searchFilterSuccessAction = (result) =>{
    return { type: searchConstants.SEARCH_FILTER_SUCCESS,result }
}

export const searchFilterFailureAction = (errorMsg) =>{
    return { type: searchConstants.SEARCH_FILTER_FAILURE,errorMsg }
}



