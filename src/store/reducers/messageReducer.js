import {GET_MESSAGE_ACTION} from '../actions/messageAction';


export default (state = null, action) => {
  switch (action.type) {
    case GET_MESSAGE_ACTION:
      const message = (action.message);
      return message;
    default:
      return state;
  }
}
