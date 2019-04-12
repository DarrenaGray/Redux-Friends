import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_FRIENDS_START = "FETCH_FRIEND_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIEND_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIEND_FAILURE";

export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

const baseUrl = 'http://localhost:5000';
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return (
        axios 
            .post(`${baseUrl}/api/login`, creds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
            })
            .catch(err => {
                console.log(err)
            })
        );
}

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START })
    axios
        .get(`${baseUrl}/api/friends`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response })
        });
}

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND_START })
    axios
        .delete(`${baseUrl}/api/friends/${id}`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_FRIEND_FAILURE, payload: err })
        })
}