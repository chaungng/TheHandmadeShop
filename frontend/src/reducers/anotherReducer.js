import { CHOOSE_CATEGORY_TO_FILTER } from '../actions';

const anotherReducer = (state = '', action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY_TO_FILTER:
            if (state.includes(action.category)) return state;
            return state += action.category;
        default:
            return state;
    }
};

export default anotherReducer;