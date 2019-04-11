import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_FRIENDS_START = "FETCH_FRIEND_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIEND_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIEND_FAILURE";

const baseUrl = 'http://localhost:5000';
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
        .post(`${baseUrl}/api/login`, creds)
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
}

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START })
    axios
        .get(`${baseUrl}/api/friends`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err })
        })
}