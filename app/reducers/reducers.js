import { combineReducers } from 'redux'

export function login(data) {
    fetch(targetIP + '/api/post/login', {
        method: 'POST',
        body: JSON.stringify(
            {
                email: data.email,
                passwd: data.passwd
            }
        )
    }).then((response) => response.json()).then((responseJson) => {
        if (responseJson['message'] == 'SUCCESS') {
            return {
                logined: true,
                email: data.email,
                username: responseJson['username'],
                passwd: data.passwd,
                avator: responseJson['avator']
            }
        }
        else {
            return {
                logined: false
            }
        }
    }).catch((error) => {
        return {
            logined: false
        }
    })
}

export function register(date) {
    fetch(targetIP + '/api/post/register', {
        method: 'POST',
        body: JSON.stringify({
            email: data.email,
            username: data.username,
            passwd: data.passwd
        })
    }).then((response) => response.json()).then((response) => {
        if (responseJson['message'] == 'SUCCESS') {
            return {
                logined: true,
                email: data.email,
                username: data.username,
                passwd: data.passwd,
                avator: responseJson['avator']
            }
        }
        else {
            return {
                logined: false
            }
        }
    })
}