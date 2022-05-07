import { detailConstants } from '../_constants';


export const detailRequestAction = (id) =>{
    return { type: detailConstants.GET_DETAIL_REQUEST,id }
}
export const detailSuccessAction = (result) =>{
    return { type: detailConstants.GET_DETAIL_SUCCESS,result }
}
export const detailFailureAction = (errorMsg) =>{
    return { type: detailConstants.GET_DETAIL_FAILURE,errorMsg }
}
