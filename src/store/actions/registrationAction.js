import request from '../../utils/request';

// export const REGISTRATION_RECEIVED = 'REGISTRATION_RECEIVED';

// export const registerReceivedAction = (registration) => {
//   return {
//     type: REGISTRATION_RECEIVED,
//     registration:registration
//   };
// }

export default (r) => {
  return (dispatch) => {
    request(
      '/user',
      'POST', r)
    //TODO catch
  }
}
