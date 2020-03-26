import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { reducer as formReducer } from 'redux-form'

import dataReducer from './data/data.reducer';
import filterReducer from './filter/filter.reducer';

const persistConfig = {
    key: 'root',
    storage,
    //stateReconciler: autoMergeLevel2,
    whitelist: ['data', 'form']
}

const rootReducer = combineReducers({
    data: dataReducer,
    form: formReducer,
    filter: filterReducer
});

export default persistReducer(persistConfig, rootReducer);




// export default combineReducers({
//     data: dataReducer,
//     form: formReducer
// });