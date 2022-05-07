import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import rootSaga from '../_sagas/root.saga';


const loggerMiddleware = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        saga,
        loggerMiddleware,
    )
);

saga.run(rootSaga);

export default store;