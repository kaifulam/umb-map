import FilterActionTypes from './filter.types';

const INITIAL_STATE = {
    mediumRisk: true,
    highRisk: true,
    criticalRisk: true
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.TOGGLE_MEDIUM_RISK:
            return {
                ...state,
                mediumRisk: !state.mediumRisk
            }
        case FilterActionTypes.TOGGLE_HIGH_RISK:
            return {
                ...state,
                highRisk: !state.highRisk
            }
        case FilterActionTypes.TOGGLE_CRITICAL_RISK:
            return {
                ...state,
                criticalRisk: !state.criticalRisk
            }
        default:
            return state;
    }
}

export default filterReducer;