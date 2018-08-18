import {CURRENT} from '../actions/userAction';


export default (state = null, action) => {
  switch (action.type) {
    case CURRENT:
      const newUser = (action.userById);
      return newUser;
    default:
      return state;
  }
}
