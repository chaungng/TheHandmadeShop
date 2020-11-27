import { combineReducers } from 'redux';
import shopReducer from './shopReducer';
import anotherReducer from './anotherReducer';

const rootReducer = combineReducers({
    shop: shopReducer,
    category: anotherReducer
});

export default rootReducer;