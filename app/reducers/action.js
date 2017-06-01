export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'
export const GET_PAGE_FLOW = 'GET_PAGE_FLOW'
export const REGISTER = 'REGISTER';
export const GET_CART = 'GET_CART';
export const GET_ORDER = 'GET_ORDER';
//export const GET_
// export const GET_


export function action_login(userinfo) {
  dispatch({
    type: LOGIN,
    userinfo: userinfo
  })
}

export function action_logout() {
  dispatch({
    type: LOGOUT
  })
}

export function action_get_page_flow() {
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
              dispatch({
                type: GET_PAGE_FLOW,
                page_flow: responseJson.DATA
              })
          }
      })
      .catch((error) => {
          console.log('get page flow fail')
      });
}

export function action_get_cat_detail() {

}
