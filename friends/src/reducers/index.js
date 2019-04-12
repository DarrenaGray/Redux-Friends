import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from "../actions";


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
                error: ''
            }
        default:
            return state;
    }
}

export default reducer;