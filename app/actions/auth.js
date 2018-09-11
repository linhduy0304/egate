


import {
  Alert
} from 'react-native';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,

  CHECK_SERVER_SUCCESS,
  
} from '../config/types';
import { Actions } from 'react-native-router-flux';
const Auth = require('../services/Auth');

//login
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}
export const login = (body) => {
  return dispatch => {
    dispatch(loginRequest())
    return Auth.login(body)
      .then(res => {
        switch(res.status) {
          case 200:
            Actions.tab({type: 'reset'})
            dispatch(loginSuccess())
          default:
            Alert.alert(
              'Error!',
              res.message,
              [
                {text: 'OK', onPress: () => null},
              ],
            )
            dispatch(loginSuccess())
            return
        }
      })
      .catch((error) => {
         return dispatch(checkServerSuccess())
      });
  };
}

//check server
export const checkServerSuccess = () => {
  return {
    type: CHECK_SERVER_SUCCESS,
  }
}
export const checkServer = () => {
  return dispatch => {
    return Auth.checkServer()
      .then(res => {
        if(res.status) {
          Actions.login({type: 'reset'})
          dispatch(checkServerSuccess())
        }else {
          Alert.alert(
            'Error',
            'Not connected to server',
            [
              {text: 'Retry', onPress: () => dispatch(checkServer())},
            ],
          )
          dispatch(checkServerSuccess())
          return
        }
      })
      .catch((error) => {
        dispatch(checkServerSuccess())
        return;
      });
  };
}

