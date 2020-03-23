import FilterActionTypes from './filter.types';

export const toggleLow = () => ({
    type: FilterActionTypes.TOGGLE_LOW
});

export const toggleMedium = () => ({
    type: FilterActionTypes.TOGGLE_MEDIUM
});

export const toggleHigh = () => ({
    type: FilterActionTypes.TOGGLE_HIGH
});

export const clearFilter = item => ({
    type: FilterActionTypes.CLEAR_FILTER,
    payload: item
})