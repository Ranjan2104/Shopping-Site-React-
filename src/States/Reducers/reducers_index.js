import { combineReducers } from 'redux';
import getProductData from './GetDataReducer';

const rootReducer = combineReducers({
    getProductData
})

export default rootReducer;