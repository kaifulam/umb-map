import DataActionTypes from './data.types';

const INITIAL_STATE = {
    dataJson: null,
    filteredData: null,
    isFetching: false,
    errorMessage: '',
    critialRisk: true
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.TOGGLE_FETCH:
            return {
                ...state,
                isFetching: !state.isFetching
            }

        case DataActionTypes.FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }

        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataJson: Object.assign({}, action.payload),
                filteredData: Object.assign({}, action.payload)
            }

        case DataActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        case DataActionTypes.RESET_FILTERED_DATA: {

            console.log('inside rfd', state.dataJson)
            return {
                ...state,
                filteredData: Object.assign({}, state.dataJson)
            }
        }
        case DataActionTypes.FILTER_OUT_LOW_RISK: {
            console.log('dispatching filter out low')

            if (action.payload) {
                return { ...state }
            }
            else {
                var data_filtering = state.filteredData;
                data_filtering.features = state.filteredData.features.filter(location => {
                    return location.properties.preliminary_risk_category !== 'Low Risk'
                })
                console.log(state.filteredData);
                return {
                    ...state,
                    filteredData: data_filtering
                }
            }
        }
        case DataActionTypes.FILTER_OUT_MEDIUM_RISK: {
            console.log('dispatching filter out medium')
            if (action.payload) {
                return { ...state }
            }
            else {
                var data_filtering = state.filteredData;
                data_filtering.features = state.filteredData.features.filter(location => {
                    return location.properties.preliminary_risk_category !== 'Medium Risk'
                })
                console.log(state.filteredData);
                return {
                    ...state,
                    filteredData: data_filtering
                }
            }
        }
        case DataActionTypes.FILTER_OUT_HIGH_RISK: {
            console.log('dispatching filter out high')

            if (action.payload) {
                return { ...state }
            }
            else {
                var data_filtering = state.filteredData;
                data_filtering.features = state.filteredData.features.filter(location => {
                    return location.properties.preliminary_risk_category !== 'High Risk'
                })
                console.log(state.filteredData);
                return {
                    ...state,
                    filteredData: data_filtering
                }
            }
        }
        case DataActionTypes.FILTER_OUT_CRITICAL_RISK: {
            console.log('dispatching filter out critical')

            if (action.payload) {
                return { ...state }
            }
            else {
                var data_filtering = state.filteredData;
                data_filtering.features = state.filteredData.features.filter(location => {
                    return location.properties.preliminary_risk_category !== 'Critical Risk'
                })
                console.log(state.filteredData);
                return {
                    ...state,
                    filteredData: data_filtering
                }
            }
        }
        default:
            return state;
    }
}


export default dataReducer;