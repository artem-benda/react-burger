import { 
    EDIT_USER_FAILED,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    GET_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    SEND_RESET_PASSWORD_CODE_FAILED,
    SEND_RESET_PASSWORD_CODE_REQUEST,
    SEND_RESET_PASSWORD_CODE_SUCCESS
} from "../actions/auth";

const initialState = {
    user: null,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    registerRequest: false,
    registerFailed: false,

    sendResetPasswordCodeRequest: false,
    sendResetPasswordCodeSuccess: false,
    sendResetPasswordCodeFailed: false,

    resetPasswordRequest: false,
    resetPasswordSuccess: false,
    resetPasswordFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    editUserRequest: false,
    editUserFailed: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginFailed: false
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginRequest: false,
                loginFailed: false,
                user: action.payload
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loginRequest: false,
                loginFailed: true
            }
        }
        case REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                registerFailed: false
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerRequest: false,
                registerFailed: false,
                user: action.payload
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                registerRequest: false,
                registerFailed: true
            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
                logoutFailed: false
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
                logoutFailed: false,
                user: null
            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state,
                logoutRequest: false,
                logoutFailed: true
            }
        }
        case SEND_RESET_PASSWORD_CODE_REQUEST: {
            return {
                ...state,
                sendResetPasswordCodeRequest: true,
                sendResetPasswordCodeSuccess: false,
                sendResetPasswordCodeFailed: false
            }
        }
        case SEND_RESET_PASSWORD_CODE_SUCCESS: {
            return {
                ...state,
                sendResetPasswordCodeRequest: false,
                sendResetPasswordCodeSuccess: true,
                sendResetPasswordCodeFailed: false
            }
        }
        case SEND_RESET_PASSWORD_CODE_FAILED: {
            return {
                ...state,
                sendResetPasswordCodeRequest: false,
                sendResetPasswordCodeSuccess: false,
                sendResetPasswordCodeFailed: true
            }
        }
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordSuccess: false,
                resetPasswordFailed: false
            }
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordSuccess: true,
                resetPasswordFailed: false
            }
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordSuccess: false,
                resetPasswordFailed: true
            }
        }
        case GET_USER_REQUEST: {
            return {
                ...state,
                getUserRequest: true,
                getUserFailed: false
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                getUserRequest: false,
                getUserFailed: false,
                user: action.payload
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                getUserRequest: false,
                getUserFailed: true
            }
        }
        case EDIT_USER_REQUEST: {
            return {
                ...state,
                editUserRequest: true,
                editUserFailed: false
            }
        }
        case EDIT_USER_SUCCESS: {
            return {
                ...state,
                editUserRequest: false,
                editUserFailed: false,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        }
        case EDIT_USER_FAILED: {
            return {
                ...state,
                editUserRequest: false,
                editUserFailed: true
            }
        }
        default: {
            return state;
        }
    }
}
