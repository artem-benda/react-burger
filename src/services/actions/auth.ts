import * as api from '../../utils/data';
import { TUser } from '../../utils/types';
import { IGetUserFailedAction, IGetUserSuccessAction } from '../types/auth';
import { AppDispatch } from '../types/index';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED,
    SEND_RESET_PASSWORD_CODE_REQUEST,
    SEND_RESET_PASSWORD_CODE_SUCCESS,
    SEND_RESET_PASSWORD_CODE_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED
} from '../constants/auth';

export function loginThunk(email: string, password: string) {
    return function(dispatch: AppDispatch) {
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

export function registerThunk(email: string, password: string, name: string) {
    return function(dispatch: AppDispatch) {
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

export function logoutThunk() {
    return function(dispatch: AppDispatch) {
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

export function getUserThunk() {
    return function(dispatch: AppDispatch) {
        dispatch({ type: GET_USER_REQUEST })
        api.getUser()
            .then(user => {
                dispatch({ type: GET_USER_SUCCESS, payload: user});
            })
            .catch(e => {
                dispatch({ type: GET_USER_FAILED});
            })
    }
}

export function editUserThunk(editData: api.TEditUserParams) {
    return function(dispatch: AppDispatch) {
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

export function sendPasswordResetCodeThunk(email: string) {
    return function(dispatch: AppDispatch) {
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

export function resetPasswordThunk(password: string, token: string) {
    return function(dispatch: AppDispatch) {
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

export function getUserSuccess(payload: TUser): IGetUserSuccessAction {
    return {
        type: GET_USER_SUCCESS,
        payload
    }
}

export function getUserFailed(): IGetUserFailedAction {
    return {
        type: GET_USER_FAILED
    }
}