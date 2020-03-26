import DataActionTypes from './data.types';

export const toggleFetch = () => ({
    type: DataActionTypes.TOGGLE_FETCH,
});

export const resetFilteredData = () => ({
    type: DataActionTypes.RESET_FILTERED_DATA,
});

export const fetchDataStart = () => ({
    type: DataActionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = (data) => ({
    type: DataActionTypes.FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (errorMessage) => ({
    type: DataActionTypes.FETCH_DATA_SUCCESS,
    payload: errorMessage
});

export const fetchDataStartAsync = () => {
    return dispatch => {
        dispatch(fetchDataStart());

        fetch('https://data.seattle.gov/resource/54qs-2h7f.geojson')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(fetchDataSuccess(data))
            })
            .catch(error => dispatch(fetchDataFailure(error.message)))
    }
}


export const filterOutLowRisk = (includeLowRisk) => ({
    type: DataActionTypes.FILTER_OUT_LOW_RISK,
    payload: includeLowRisk
});

export const filterOutMediumRisk = (includeMediumRisk) => ({
    type: DataActionTypes.FILTER_OUT_MEDIUM_RISK,
    payload: includeMediumRisk
});

export const filterOutHighRisk = (includeHighRisk) => ({
    type: DataActionTypes.FILTER_OUT_HIGH_RISK,
    payload: includeHighRisk
});

export const filterOutCriticalRisk = (includeCriticalRisk) => ({
    type: DataActionTypes.FILTER_OUT_CRITICAL_RISK,
    payload: includeCriticalRisk
});