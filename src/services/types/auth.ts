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

import { TUser } from '../../utils/types';
import { TEditUserParams } from '../../utils/data';

export interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST
}

export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: TUser
}

export interface ILoginFailedAction {
    readonly type: typeof LOGIN_FAILED
}

export interface IRegisterRequestAction {
    readonly type: typeof REGISTER_REQUEST
}

export interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_SUCCESS;
    readonly payload: TUser
}

export interface IRegisterFailedAction {
    readonly type: typeof REGISTER_FAILED
}

export interface ILogoutRequestAction {
    readonly type: typeof LOGOUT_REQUEST
}

export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
    readonly type: typeof LOGOUT_FAILED
}

export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST
}

export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly payload: TUser
}

export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED
}

export interface IEditUserRequestAction {
    readonly type: typeof EDIT_USER_REQUEST
}

export interface IEditUserSuccessAction {
    readonly type: typeof EDIT_USER_SUCCESS;
    readonly payload: TEditUserParams;
}

export interface IEditUserFailedAction {
    readonly type: typeof EDIT_USER_FAILED
}

export interface ISendResetCodeRequestAction {
    readonly type: typeof SEND_RESET_PASSWORD_CODE_REQUEST
}

export interface ISendResetCodeSuccessAction {
    readonly type: typeof SEND_RESET_PASSWORD_CODE_SUCCESS;
}

export interface ISendResetCodeFailedAction {
    readonly type: typeof SEND_RESET_PASSWORD_CODE_FAILED
}

export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST
}

export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailedAction {
    readonly type: typeof RESET_PASSWORD_FAILED
}

export type TAuthActionTypes =
    ILoginRequestAction |
    ILoginSuccessAction |
    ILoginFailedAction |
    IRegisterRequestAction |
    IRegisterSuccessAction |
    IRegisterFailedAction |
    ILogoutRequestAction |
    ILogoutSuccessAction |
    ILogoutFailedAction |
    IGetUserRequestAction |
    IGetUserSuccessAction |
    IGetUserFailedAction |
    IEditUserRequestAction |
    IEditUserSuccessAction |
    IEditUserFailedAction |
    ISendResetCodeRequestAction |
    ISendResetCodeSuccessAction |
    ISendResetCodeFailedAction |
    IResetPasswordRequestAction |
    IResetPasswordSuccessAction |
    IResetPasswordFailedAction;