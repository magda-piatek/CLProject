import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import registrationReducer from './reducers/registrationReducer';
import userReducer from './reducers/userReducer';
import categoryReducer from './reducers/categoryReducer';
import messageReducer from './reducers/messageReducer';
import logoutReducer from './reducers/logoutReducer';
import userByIdReducer from './reducers/userByIdReducer';
import categorySelectedReducer from './reducers/categorySelectedReducer';


const stackReducers = (...reducers) => {
  return (state=[], action) => {
    let newState = state;
    for(const reducer of reducers){
      newState = reducer(newState, action);
    }
    return newState;
  }
}
export const initialState = {
    user:null,
    category:[],
    message:[],
    userById:{},
    categorySelected:{}
};



 export default createStore(
  stackReducers(
    combineReducers({
    user:userReducer,
    category:categoryReducer,
    message:messageReducer,
    userById:userByIdReducer,
    categorySelected:categorySelectedReducer
    }),
    logoutReducer),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ));
