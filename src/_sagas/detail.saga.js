import {put,call,takeLatest,all} from 'redux-saga/effects'
import {detailService} from '../_services/detail.service'
import { detailConstants } from '../_constants';
import {
    detailSuccessAction,
    detailFailureAction
} from '../_actions/'


function* detail(action){
    try {
        const result = yield call(detailService.getDetailRequest,action.id)
        
        yield put(detailSuccessAction(result))

    } catch (error) {
        yield put(detailFailureAction(error))
    }

}



function* watchGetDetail(){
    
    yield  takeLatest(detailConstants.GET_DETAIL_REQUEST,detail)
}

export function* detailSagas(){
    yield all([
        watchGetDetail(),
    ])
}