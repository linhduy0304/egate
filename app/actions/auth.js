


import {
  Alert
} from 'react-native';
import {
  LOGIN_REQUEST,
  LOGIN_SUCC,
  LOGIN_FAIL,
  PROFILE_SUCCESS
} from '../config/types';
import { Actions } from 'react-native-router-flux';
const Auth = require('../services/Auth');

export const checkServer = () => {
  return dispatch => {
    return Auth.checkServer()
      .then(res => {
        console.log(res)
        if(res.status) {
          Actions.tab({type: 'reset'})
        }else {
          Alert.alert(
            'Notification',
            'Not connected to server',
            [
              {text: 'Retry', onPress: () => dispatch(checkServer())},
            ],
            { cancelable: false }
          )
        }
        // switch(res.status) {
        //   case 1:
        //     new Store().storeSession(Const.ARR_ID_NOTI, []);
        //     new Store().storeSession(Const.TOKEN, res.data.token);
        //     new Store().storeSession(Const.IS_LOGIN, true);
        //     Actions.tab({type: 'reset'})
        //     dispatch(profileUserSuccess(res.data.info));
        //     dispatch(loginSuccess());
        //     return;
        //   default:
        //     SimpleToast.show(res.meta.message)
        //     dispatch(loginFail());
        //     return;
        // }
      })
      .catch((error) => {
        // dispatch(loginFail())
      });
  };
}