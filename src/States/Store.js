import { legacy_createStore as createstore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/reducers_index';
import thunk from 'redux-thunk';

const store = createstore(rootReducer, applyMiddleware(thunk));

export default store;