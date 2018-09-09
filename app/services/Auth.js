

let HTTP = require('./HTTP');
let URL = require('./URL');

//check serVer
export const checkServer = () => {
  return HTTP.get(`${URL.user}indexr`)
}


