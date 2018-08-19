import request from '../../utils/request';

export default (r) => {
  return (dispatch) => {
    request(
      '/user',
      'POST', r)
  }
}
