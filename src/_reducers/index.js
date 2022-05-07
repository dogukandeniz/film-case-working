import { combineReducers } from 'redux';
import { search } from './search.reducer';
import { detail } from './detail.reducer';

const rootReducer = combineReducers({
    search,
    detail
});

export default rootReducer;