

let HTTP = require('./HTTP');
let URL = require('./URL');

//login
export const login = () => {
  return HTTP.post(`${URL.user}signin`)
}

//check serVer
export const checkServer = () => {
  return HTTP.get(`${URL.user}index`)
}