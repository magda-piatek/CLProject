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
    //TODO catch
  }
}
export const sendMessageToUser = (userId,message) => {
  console.log(userId,message)
  return (dispatch) => {
   request('/user/'+userId+'/', 'PATCH',{inBox:message})
    .then(r => dispatch(getUsers()))
    //TODO catch
  }
}
export const currentUser = (id) => {
  return (dispatch) => {
    request('/user/'+id+'/', 'GET')
    .then(r => dispatch(userCurrentAction(r)))
    //TODO catch
  }
}


export default {
getUsers,
currentUser,
sendMessageToUser
} 
  