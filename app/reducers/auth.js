

import {
  LOGIN_REQUEST,
} from '../config/types';

const initialState = {
  auth: null,
  loading: null
}

export default function auth (state = initialState, action) {
  switch(action.type) {
    case LOGIN_REQUEST: 
      return {
        ...state,
        loading: true
      }
    
    default: 
      return state
  }
}