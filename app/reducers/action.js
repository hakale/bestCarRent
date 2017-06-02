export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'
export const GET_PAGE_FLOW = 'GET_PAGE_FLOW'
export const REGISTER = 'REGISTER';
export const GET_CART = 'GET_CART';
export const GET_ORDER = 'GET_ORDER';
//export const GET_
// export const GET_


export function action_login(userinfo) {
    console.log('userinfo', userinfo)
    return {
    type: LOGIN,
    userinfo: userinfo
  }
}

export function login(userinfo) {
  return (dispatch) => {
  dispatch(action_login(userinfo))
}
}

export function gene_order(car_id, startTime, endTime) {
  return (dispatch, getState) => {
    const {userinfo} = getState();

  }

}


export function action_get_orders(orders) {
  return {
    type: GET_ORDER,
    orders: orders
  }
}


export function get_orders() {

  return (dispatch, getState) => {
    const {userinfo} = getState().appData;
    fetch(hostip + '/api/post/get_orders', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: userinfo.email,
            passwd: userinfo.passwd,
        })
    })
        .then((response) => {
            return response.json()})
        .then((responseJson) => {
            if (responseJson.MESSAGE == 'SUCCESS') {
                dispatch(action_get_orders(responseJson.DATA))
            }
        })
        .catch((error) => {
            console.log('get page flow fail')
        });
  }


}

export function action_logout() {
  dispatch({
    type: LOGOUT
  })
}

export function action_get_page_flow(data) {
  return {
    type: GET_PAGE_FLOW,
    data: data
  }
}

export function get_page_flow() {
  fetch(hostip + '/api/post/get_page_flow', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  })
      .then((response) => {
          return response.json()})
      .then((responseJson) => {
          if (responseJson.MESSAGE == 'SUCCESS') {
              dispatch(action_get_page_flow(responseJson.DATA))
          }
      })
      .catch((error) => {
          console.log('get page flow fail')
      });
}

export function action_get_cat_detail() {

}
