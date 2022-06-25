import * as api from '../../utils/data';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const SEND_RESET_PASSWORD_CODE_REQUEST = "SEND_RESET_PASSWORD_CODE_REQUEST";
export const SEND_RESET_PASSWORD_CODE_SUCCESS = "SEND_RESET_PASSWORD_CODE_SUCCESS";
export const SEND_RESET_PASSWORD_CODE_FAILED = "SEND_RESET_PASSWORD_CODE_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILED = "EDIT_USER_FAILED";

export function login(email, password) {
    return function(dispatch) {
        dispatch({ type: LOGIN_REQUEST })
        api.login(email, password)
            .then(data => {
                dispatch({ type: LOGIN_SUCCESS, payload: data.user});
            })
            .catch(e => {
                dispatch({ type: LOGIN_FAILED});
            })
    }
}

export function register(email, password, name) {
    return function(dispatch) {
        dispatch({ type: REGISTER_REQUEST })
        api.register(email, password, name)
            .then(data => {
                dispatch({ type: REGISTER_SUCCESS, payload: data.user});
            })
            .catch(e => {
                dispatch({ type: REGISTER_FAILED});
            })
    }
}

export function logout() {
    return function(dispatch) {
        dispatch({ type: LOGOUT_REQUEST })
        api.logout()
            .then(() => {
                dispatch({ type: LOGOUT_SUCCESS});
            })
            .catch(e => {
                dispatch({ type: LOGOUT_FAILED});
            })
    }
}

export function getUser() {
    return function(dispatch) {
        dispatch({ type: GET_USER_REQUEST })
        api.getUser()
            .then(data => {
                dispatch({ type: GET_USER_SUCCESS, payload: data.user});
            })
            .catch(e => {
                dispatch({ type: GET_USER_FAILED});
            })
    }
}

export function editUser(editData) {
    return function(dispatch) {
        dispatch({ type: EDIT_USER_REQUEST })
        api.editUser(editData)
            .then(data => {
                dispatch({ type: EDIT_USER_SUCCESS, payload: editData});
            })
            .catch(e => {
                dispatch({ type: EDIT_USER_FAILED});
            })
    }
}

export function sendPasswordResetCode(email) {
    return function(dispatch) {
        dispatch({ type: SEND_RESET_PASSWORD_CODE_REQUEST })
        api.sendPasswordResetCode(email)
            .then(data => {
                dispatch({ type: SEND_RESET_PASSWORD_CODE_SUCCESS});
            })
            .catch(e => {
                dispatch({ type: SEND_RESET_PASSWORD_CODE_FAILED});
            })
    }
}

export function resetPassword(password, token) {
    return function(dispatch) {
        dispatch({ type: RESET_PASSWORD_REQUEST })
        api.resetPassword(password, token)
            .then(() => {
                dispatch({ type: RESET_PASSWORD_SUCCESS});
            })
            .catch(e => {
                dispatch({ type: RESET_PASSWORD_FAILED});
            })
    }
}

export function getUserSuccess(payload) {
    return {
        type: GET_USER_SUCCESS,
        payload
    }
}

export function getUserFailed() {
    return {
        type: GET_USER_FAILED
    }
}