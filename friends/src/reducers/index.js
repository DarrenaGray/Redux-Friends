import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE, DELETE_FRIEND_START, DELETE_FRIEND_SUCCESS, ADD_FRIEND_START, ADD_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE, ADD_FRIEND_FAILURE } from "../actions";


const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                fetchingFriends: false,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: ''
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
                error: ''
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                savingFriends: true,
                error: ''
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                savingFriends: false,
                error:''
            }
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_FRIEND_START:
            return {
                ...state,
                fetchingFriends: false,
                deletingFriend: true,
                error: ''
            }
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                error: ''
            }
        case DELETE_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;