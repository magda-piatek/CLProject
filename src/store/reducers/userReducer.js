import {CURRENT_USER_RECEIVED} from '../actions/userAction';


export default (state = null, action) => {
  switch (action.type) {
    case CURRENT_USER_RECEIVED:
      const newUser = (action.user);
      return newUser;
    default:
      return state;
  }
}
