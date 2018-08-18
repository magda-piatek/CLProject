import request from '../../utils/request';

export const MESSAGE_SEND_ACTION = 'MESSAGE_SEND_ACTION';
export const GET_MESSAGE_ACTION = 'GET_MESSAGE_ACTION';

export const messageSendAction = () => {
  return {
    type: MESSAGE_SEND_ACTION,

  };
}
export const messageGetAction = (message) => {
  return {
    type: GET_MESSAGE_ACTION,
    message:message

  };
}

export const sendMessage = (r) => {
  return (dispatch) => {
    request('/message', 'POST',r)
    .then(r => dispatch(messageSendAction()))
    .then(r=>dispatch(getMessage()))
    //TODO catch
  }
}

export const getMessage = (r) => {
  return (dispatch) => {
    request('/message', 'GET',r)
    .then(r => dispatch(messageGetAction(r)))
    //TODO catch
  }
}
 

export const updateCategory = (id,s) => {
  console.log(id,s)
  return (dispatch) => {
    request('/message/'+id+'/', 'PATCH',{state:s})
    .then(r => dispatch(getMessage()))
    //TODO catch
  }
}
export default {
sendMessage,
getMessage,
updateCategory,

}
