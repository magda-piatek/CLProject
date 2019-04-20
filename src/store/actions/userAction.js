import request from '../../utils/request';

export const CURRENT_USER_RECEIVED = 'CURRENT_USER_RECEIVED';
export const CURRENT = 'CURRENT';

export const userReceivedAction = (user) => {
  return {
    type: CURRENT_USER_RECEIVED,
    user: user,
  };
}
export const userCurrentAction = (userById) => {
  return {
    type: CURRENT,
    userById:userById
  };
}


export const getUsers = () => {
  return (dispatch) => {
    request('/user', 'GET' )
    .then(r => dispatch(userReceivedAction(r)))
  }
}
export const sendMessageToUser = (userId,r) => {
  console.log(userId,r)
  return (dispatch) => {
   request('/message/'+userId+'/', 'PATCH',{messageReceived:r})
    .then(r => dispatch(getUsers()))
  }
}
export const currentUser = (id) => {
  return (dispatch) => {
    request('/user/'+id+'/', 'GET')
    .then(r => dispatch(userCurrentAction(r)))
  }
}


export default {
  getUsers,
  currentUser,
  sendMessageToUser
} 
  
