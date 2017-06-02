import { combineReducers } from 'react-redux'
import {
    LOGIN, REGISTER, GET_CART, GET_ORDER,LOGOUT, GET_PAGE_FLOW
} from './action.js'

const initialState = {
  userinfo: {},
  logined: false
};
export default function appData(state = initialState , action) {
    switch (action.type) {
        case LOGIN:
            console.log('reducer login')
            return {
              ...state,
              userinfo: action.userinfo
            }
        case LOGOUT:
            return {

            }
        case GET_PAGE_FLOW:
            return {
              ...state,
              page_flow: type.data
            }
        case GET_ORDER:
            return {
              ...state,
              orders: action.orders
            }
        default:
            console.log('reduce default')
            return state

    }
}
