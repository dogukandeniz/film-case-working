import { searchConstants } from '../_constants';

const initialState = {
    loading:false,
    fetched:false,
    errorMsg:"",
    items:[],
    totalPageCount:0,
    totalPageNumber:0,
}

export function search(state = initialState, action) {

    
    switch (action.type) {
        case searchConstants.SEARCH_FILTER_INIT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case searchConstants.SEARCH_FILTER_INIT_SUCCESS:
            return {
                ...state,
                loading: false,
                items:[...action.result.Search],
                totalPageCount:action.result.totalResults,
                totalPageNumber:Math.ceil(action.result.totalResults / 10),
            };
        case searchConstants.SEARCH_FILTER_INIT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMsg:action.result.Error
            };
        case searchConstants.SEARCH_FILTER_REQUEST:
            return {
                loading: true
            };
        case searchConstants.SEARCH_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                items:[...action.result.Search],
                totalPageCount:action.result.totalResults,
                totalPageNumber:Math.ceil(action.result.totalResults / 10),

            };
        case searchConstants.SEARCH_FILTER_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}