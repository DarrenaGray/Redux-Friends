import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE"

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