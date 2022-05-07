import { all } from 'redux-saga/effects'

import { searchSaga } from './search.saga'
import { detailSagas } from './detail.saga'

function* rootSaga() {
    yield all([
        searchSaga(),
        detailSagas()
    ])
}

export default rootSaga