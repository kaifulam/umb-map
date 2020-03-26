import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as formReducer } from 'redux-form'

import dataReducer from './data/data.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['data', 'form']
}

const rootReducer = combineReducers({
    data: dataReducer,
    form: formReducer
});

export default persistReducer(persistConfig, rootReducer);




// export default combineReducers({
//     data: dataReducer,
//     form: formReducer
// });