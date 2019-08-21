import {combineReducers} from 'redux';
import ItemsReducer from './ItemsReducer';

const store=combineReducers({
    items: ItemsReducer
});

export default store;
