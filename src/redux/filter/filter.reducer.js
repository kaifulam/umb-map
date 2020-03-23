import FilterActionTypes from './filter.types';
//import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    dataJson: null,
    filteredData: null,
    lowRisk: false,
    mediumRisk: true,
    highRisk: true
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.TOGGLE_LOW:
            return {
                lowRisk: !state.lowRisk
            }
        case FilterActionTypes.TOGGLE_MEDIUM:
            return {
                mediumRisk: !state.mediumRisk
            }
        case FilterActionTypes.TOGGLE_HIGH:
            return {
                highRisk: !state.highRisk
            }
        default:
            return state;
    }
}

export default filterReducer;