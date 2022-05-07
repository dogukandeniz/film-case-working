import { detailConstants } from '../_constants';

const initialState = {
    loading:false,
    errorMsg:"",
    item:"",
}

export function detail(state = initialState, action) {

    
    switch (action.type) {
        case detailConstants.GET_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case detailConstants.GET_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                item:action.result
            };
        case detailConstants.GET_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                errorMsg:action.result.Error
            };

        default:
            return state
    }
}