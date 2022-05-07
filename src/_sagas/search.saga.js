import {put,call,takeLatest,all} from 'redux-saga/effects'
import {searchService} from '../_services/search.service'
import { searchConstants } from '../_constants';
import {
    initSearchFilterSuccessAction,
    initSearchFilterFailureAction,
    searchFilterSuccessAction,
    searchFilterFailureAction
} from '../_actions/'


function* loadInitFilmList(){
    try {
        const result = yield call(searchService.initRequest)
        yield put(initSearchFilterSuccessAction(result))

    } catch (error) {
        yield put(initSearchFilterFailureAction(error))
    }

}

function* filterFilmList(action){
    try {
        const result = yield call(searchService.filterRequest,action.filterObj)
        
        if(result.Response !== "False"){
            yield put(searchFilterSuccessAction(result))
        }else{
           yield put(searchFilterFailureAction(result.Error))
        }

    } catch (error) {
        yield put(searchFilterFailureAction(error))
    }

}


//Watcher Sagas
function* watchLoadSearch(){
    yield  takeLatest(searchConstants.SEARCH_FILTER_INIT_REQUEST,loadInitFilmList)
}
function* watchLoadSearchFilter(){
    
    yield  takeLatest(searchConstants.SEARCH_FILTER_REQUEST,filterFilmList)
}

export function* searchSaga(){
    yield all([
        watchLoadSearch(),
        watchLoadSearchFilter(),
    ])
}