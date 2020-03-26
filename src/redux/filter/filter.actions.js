import FilterActionTypes from './filter.types';

export const toggleMediumRisk = () => ({
    type: FilterActionTypes.TOGGLE_MEDIUM_RISK,
});

export const toggleHighRisk = () => ({
    type: FilterActionTypes.TOGGLE_HIGH_RISK,
});

export const toggleCriticalRisk = () => ({
    type: FilterActionTypes.TOGGLE_CRITICAL_RISK,
});