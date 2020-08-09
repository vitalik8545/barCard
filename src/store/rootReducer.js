import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {PostReducer} from './reducers/post';

const rootReducer = combineReducers({post: PostReducer});

export default createStore(rootReducer, applyMiddleware(thunk));
