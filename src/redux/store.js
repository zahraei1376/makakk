import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import RootReducer from './rootReducer';


const middlewares =[thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(RootReducer , applyMiddleware(...middlewares));
export default store;