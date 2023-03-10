import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import tvReducer from './reducers/tvReducer';

const rootReducer = combineReducers({cart: cartReducer, liveTv: tvReducer});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
