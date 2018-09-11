

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CHECK_SERVER_SUCCESS
} from '../config/types';

const initialState = {
  auth: null,
  loading: null
}

export default function auth (state = initialState, action) {
  switch(action.type) {
    case CHECK_SERVER_SUCCESS:
      return {
        ...state,
        loading: null,
      }
      
    case LOGIN_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: null
      }
    
    default: 
      return state
  }
}