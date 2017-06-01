import { combineReducers } from 'react-redux'
import {
    LOGIN, REGISTER, GET_CART, GET_ORDER,
} from './action.js'
export function userAction(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {
              ...state,
              userinfo: action.userinfo
            }
        case LOGOUT:
            return {

            }
        case REGISTER:

    }
}
