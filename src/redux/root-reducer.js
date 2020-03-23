import { combineReducers } from 'redux';

import filterReducer from './filter/filter.reducer';

export default combineReducers({
    filter: filterReducer
});