import {combineReducers } from 'redux';
import linksReducer from './linksReducer'
import {linkReduxType} from '../../type';
import copyReducer from './copiedLink';


export type AppState = {
    links: Array<linkReduxType>,
    copied: string
  };
const rootReducer  = combineReducers<AppState>({
    links: linksReducer,
    copied: copyReducer
});

export default rootReducer;