import store from '../store/store';
const API = 'localhost:4000';

export default (endpoint, method = 'GET', body = undefined) => {
  const token = store.getState().token;
  return fetch(
    `http://${API}${endpoint}`,
    {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `JWT ${token}`: null,
      },
    })
    .then(response => {
      if(response.ok){
        return response;
      }
      if ((response.status+'').startsWith('4')) {
        alert("Nevyplnili jste všechna pole správně");
      }
      throw response.statusText;
    }, e => console.log(e))
    .then(response => response.json());
}
