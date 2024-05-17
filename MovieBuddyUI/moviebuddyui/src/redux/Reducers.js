import { combineReducers } from 'redux';

// Define the initial state
const initialState = {
    isLoggedIn: false,
    user: {
        email: '',
        jwt: ''
    }
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };

        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
            };

        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: {
                    email: '',
                    jwt: ''
                },
            };
        default:
            return state;
    }
}

// Watched and Pending List Reducers
const SET_WATCHED_LIST = 'SET_WATCHED_LIST';
const SET_PENDING_LIST = 'SET_PENDING_LIST';

export const setWatchedList = (list) => ({
    type: SET_WATCHED_LIST,
    payload: list,
});

export const setPendingList = (list) => ({
    type: SET_PENDING_LIST,
    payload: list,
});

const watchedListReducer = (state = [], action) => {
    switch (action.type) {
        case SET_WATCHED_LIST:
            return action.payload;
        default:
            return state;
    }
};

const pendingListReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PENDING_LIST:
            return action.payload;
        default:
            return state;
    }
};

// Combine Reducers
const rootReducer = combineReducers({
    user: userReducer,
    watchedList: watchedListReducer,
    pendingList: pendingListReducer,
});


// Create the Redux store
export default rootReducer;