import { authReducer } from './auth';
import * as types from '../constants/auth';

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

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOGIN_REQUEST', () => {
        expect(
            authReducer(initialState, {
            type: types.LOGIN_REQUEST
        })
        ).toEqual({
            ...initialState,
            loginRequest: true
        });
    });

    it('should handle LOGIN_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                loginRequest: true
            }, {
            type: types.LOGIN_FAILED
        })
        ).toEqual({
            ...initialState,
            loginFailed: true
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loginRequest: true
            }, {
            type: types.LOGIN_SUCCESS,
            payload: {
                name: 'test-name',
                email: 'test-email'
            }
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name',
                email: 'test-email'
            }
        });
    });

    it('should handle LOGOUT_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name',
                    email: 'test-email'
                }
            }, {
            type: types.LOGOUT_REQUEST
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name',
                email: 'test-email'
            },
            logoutRequest: true
        });
    });

    it('should handle LOGOUT_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name',
                    email: 'test-email'
                },
                logoutRequest: true
            }, {
            type: types.LOGOUT_SUCCESS
        })
        ).toEqual(initialState);
    });

    it('should handle LOGOUT_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name',
                    email: 'test-email'
                },
                logoutRequest: true
            }, {
            type: types.LOGOUT_FAILED
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name',
                email: 'test-email'
            },
            logoutFailed: true
        });
    });

    it('should handle REGISTER_REQUEST', () => {
        expect(
            authReducer(initialState, {
            type: types.REGISTER_REQUEST
        })
        ).toEqual({
            ...initialState,
            registerRequest: true
        });
    });

    it('should handle REGISTER_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                registerRequest: true
            }, {
            type: types.REGISTER_SUCCESS,
            payload: {
                name: 'test-name',
                email: 'test-email'
            }
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name',
                email: 'test-email'
            }
        });
    });

    it('should handle REGISTER_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                registerRequest: true
            }, {
            type: types.REGISTER_FAILED
        })
        ).toEqual({
            ...initialState,
            registerFailed: true
        });
    });

    it('should handle SEND_RESET_PASSWORD_CODE_REQUEST', () => {
        expect(
            authReducer(initialState, {
            type: types.SEND_RESET_PASSWORD_CODE_REQUEST
        })
        ).toEqual({
            ...initialState,
            sendResetPasswordCodeRequest: true
        });
    });

    it('should handle SEND_RESET_PASSWORD_CODE_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                sendResetPasswordCodeRequest: true
            }, {
            type: types.SEND_RESET_PASSWORD_CODE_SUCCESS
        })
        ).toEqual({
            ...initialState,
            sendResetPasswordCodeSuccess: true
        });
    });

    it('should handle SEND_RESET_PASSWORD_CODE_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                sendResetPasswordCodeRequest: true
            }, {
            type: types.SEND_RESET_PASSWORD_CODE_FAILED
        })
        ).toEqual({
            ...initialState,
            sendResetPasswordCodeFailed: true
        });
    });

    it('should handle RESET_PASSWORD_REQUEST', () => {
        expect(
            authReducer(initialState, {
            type: types.RESET_PASSWORD_REQUEST
        })
        ).toEqual({
            ...initialState,
            resetPasswordRequest: true
        });
    });

    it('should handle RESET_PASSWORD_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                resetPasswordRequest: true
            }, {
            type: types.RESET_PASSWORD_SUCCESS
        })
        ).toEqual({
            ...initialState,
            resetPasswordSuccess: true
        });
    });

    it('should handle RESET_PASSWORD_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                resetPasswordRequest: true
            }, {
            type: types.RESET_PASSWORD_FAILED
        })
        ).toEqual({
            ...initialState,
            resetPasswordFailed: true
        });
    });

    it('should handle GET_USER_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                }
            }, {
            type: types.GET_USER_REQUEST
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
            getUserRequest: true
        });
    });

    it('should handle GET_USER_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
                getUserRequest: true
            }, {
            type: types.GET_USER_FAILED
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
            getUserFailed: true
        });
    });

    it('should handle GET_USER_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
                getUserRequest: true
            }, {
            type: types.GET_USER_SUCCESS,
            payload: {
                name: 'test-name2',
                email: 'test-email2'
            }
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name2',
                email: 'test-email2'
            }
        });
    });

    it('should handle EDIT_USER_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                }
            }, {
            type: types.EDIT_USER_REQUEST
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
            editUserRequest: true
        });
    });

    it('should handle EDIT_USER_FAILED', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
                editUserRequest: true
            }, {
            type: types.EDIT_USER_FAILED
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
            editUserFailed: true
        });
    });

    it('should handle EDIT_USER_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
                editUserRequest: true
            }, {
            type: types.EDIT_USER_SUCCESS,
            payload: {
                name: 'test-name2',
                email: 'test-email2'
            }
        })
        ).toEqual({
            ...initialState,
            user: {
                name: 'test-name2',
                email: 'test-email2'
            }
        });
    });
});