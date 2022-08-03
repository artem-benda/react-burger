import { authReducer } from './auth';
import * as types from '../constants/auth';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual({
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
        });
    });

    it('should handle LOGIN_REQUEST', () => {
        expect(
            authReducer({
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
            }, {
            type: types.LOGIN_REQUEST
        })
        ).toEqual({
            user: null,
        
            loginRequest: true,
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
        });
    });

    it('should handle LOGIN_FAILED', () => {
        expect(
            authReducer({
                user: null,
            
                loginRequest: true,
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
            }, {
            type: types.LOGIN_FAILED
        })
        ).toEqual({
            user: null,
        
            loginRequest: false,
            loginFailed: true,
        
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
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            authReducer({
                user: null,
            
                loginRequest: true,
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
            }, {
            type: types.LOGIN_SUCCESS,
            payload: {
                name: 'test-name',
                email: 'test-email'
            }
        })
        ).toEqual({
            user: {
                name: 'test-name',
                email: 'test-email'
            },
        
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
        });
    });

    it('should handle LOGOUT_REQUEST', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name',
                    email: 'test-email'
                },
            
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
            }, {
            type: types.LOGOUT_REQUEST
        })
        ).toEqual({
            user: {
                name: 'test-name',
                email: 'test-email'
            },
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: true,
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
        });
    });

    it('should handle LOGOUT_SUCCESS', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name',
                    email: 'test-email'
                },
            
                loginRequest: false,
                loginFailed: false,
            
                logoutRequest: true,
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
            }, {
            type: types.LOGOUT_SUCCESS
        })
        ).toEqual({
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
        });
    });

    it('should handle LOGOUT_FAILED', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name',
                    email: 'test-email'
                },
            
                loginRequest: false,
                loginFailed: false,
            
                logoutRequest: true,
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
            }, {
            type: types.LOGOUT_FAILED
        })
        ).toEqual({
            user: {
                name: 'test-name',
                email: 'test-email'
            },
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: true,
        
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
        });
    });

    it('should handle REGISTER_REQUEST', () => {
        expect(
            authReducer({
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
            }, {
            type: types.REGISTER_REQUEST
        })
        ).toEqual({
            user: null,
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: false,
        
            registerRequest: true,
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
        });
    });

    it('should handle REGISTER_SUCCESS', () => {
        expect(
            authReducer({
                user: null,
            
                loginRequest: false,
                loginFailed: false,
            
                logoutRequest: false,
                logoutFailed: false,
            
                registerRequest: true,
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
            }, {
            type: types.REGISTER_SUCCESS,
            payload: {
                name: 'test-name',
                email: 'test-email'
            }
        })
        ).toEqual({
            user: {
                name: 'test-name',
                email: 'test-email'
            },
        
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
        });
    });

    it('should handle REGISTER_FAILED', () => {
        expect(
            authReducer({
                user: null,
            
                loginRequest: false,
                loginFailed: false,
            
                logoutRequest: false,
                logoutFailed: false,
            
                registerRequest: true,
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
            }, {
            type: types.REGISTER_FAILED
        })
        ).toEqual({
            user: null,
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: false,
        
            registerRequest: false,
            registerFailed: true,
        
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
        });
    });

    it('should handle SEND_RESET_PASSWORD_CODE_REQUEST', () => {
        expect(
            authReducer({
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
            }, {
            type: types.SEND_RESET_PASSWORD_CODE_REQUEST
        })
        ).toEqual({
            user: null,
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: false,
        
            registerRequest: false,
            registerFailed: false,
        
            sendResetPasswordCodeRequest: true,
            sendResetPasswordCodeSuccess: false,
            sendResetPasswordCodeFailed: false,
        
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        
            getUserRequest: false,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle SEND_RESET_PASSWORD_CODE_SUCCESS', () => {
        expect(
            authReducer({
                user: null,
            
                loginRequest: false,
                loginFailed: false,
            
                logoutRequest: false,
                logoutFailed: false,
            
                registerRequest: false,
                registerFailed: false,
            
                sendResetPasswordCodeRequest: true,
                sendResetPasswordCodeSuccess: false,
                sendResetPasswordCodeFailed: false,
            
                resetPasswordRequest: false,
                resetPasswordSuccess: false,
                resetPasswordFailed: false,
            
                getUserRequest: false,
                getUserFailed: false,
            
                editUserRequest: false,
                editUserFailed: false
            }, {
            type: types.SEND_RESET_PASSWORD_CODE_SUCCESS
        })
        ).toEqual({
            user: null,
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: false,
        
            registerRequest: false,
            registerFailed: false,
        
            sendResetPasswordCodeRequest: false,
            sendResetPasswordCodeSuccess: true,
            sendResetPasswordCodeFailed: false,
        
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        
            getUserRequest: false,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle SEND_RESET_PASSWORD_CODE_FAILED', () => {
        expect(
            authReducer({
                user: null,
            
                loginRequest: false,
                loginFailed: false,
            
                logoutRequest: false,
                logoutFailed: false,
            
                registerRequest: false,
                registerFailed: false,
            
                sendResetPasswordCodeRequest: true,
                sendResetPasswordCodeSuccess: false,
                sendResetPasswordCodeFailed: false,
            
                resetPasswordRequest: false,
                resetPasswordSuccess: false,
                resetPasswordFailed: false,
            
                getUserRequest: false,
                getUserFailed: false,
            
                editUserRequest: false,
                editUserFailed: false
            }, {
            type: types.SEND_RESET_PASSWORD_CODE_FAILED
        })
        ).toEqual({
            user: null,
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: false,
        
            registerRequest: false,
            registerFailed: false,
        
            sendResetPasswordCodeRequest: false,
            sendResetPasswordCodeSuccess: false,
            sendResetPasswordCodeFailed: true,
        
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        
            getUserRequest: false,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle RESET_PASSWORD_REQUEST', () => {
        expect(
            authReducer({
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
            }, {
            type: types.RESET_PASSWORD_REQUEST
        })
        ).toEqual({
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
        
            resetPasswordRequest: true,
            resetPasswordSuccess: false,
            resetPasswordFailed: false,
        
            getUserRequest: false,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle RESET_PASSWORD_SUCCESS', () => {
        expect(
            authReducer({
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
            
                resetPasswordRequest: true,
                resetPasswordSuccess: false,
                resetPasswordFailed: false,
            
                getUserRequest: false,
                getUserFailed: false,
            
                editUserRequest: false,
                editUserFailed: false
            }, {
            type: types.RESET_PASSWORD_SUCCESS
        })
        ).toEqual({
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
            resetPasswordSuccess: true,
            resetPasswordFailed: false,
        
            getUserRequest: false,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle RESET_PASSWORD_FAILED', () => {
        expect(
            authReducer({
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
            
                resetPasswordRequest: true,
                resetPasswordSuccess: false,
                resetPasswordFailed: false,
            
                getUserRequest: false,
                getUserFailed: false,
            
                editUserRequest: false,
                editUserFailed: false
            }, {
            type: types.RESET_PASSWORD_FAILED
        })
        ).toEqual({
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
            resetPasswordFailed: true,
        
            getUserRequest: false,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle GET_USER_REQUEST', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
            
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
            }, {
            type: types.GET_USER_REQUEST
        })
        ).toEqual({
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
        
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
        
            getUserRequest: true,
            getUserFailed: false,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle GET_USER_FAILED', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
            
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
            
                getUserRequest: true,
                getUserFailed: false,
            
                editUserRequest: false,
                editUserFailed: false
            }, {
            type: types.GET_USER_FAILED
        })
        ).toEqual({
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
        
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
            getUserFailed: true,
        
            editUserRequest: false,
            editUserFailed: false
        });
    });

    it('should handle GET_USER_SUCCESS', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
            
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
            
                getUserRequest: true,
                getUserFailed: false,
            
                editUserRequest: false,
                editUserFailed: false
            }, {
            type: types.GET_USER_SUCCESS,
            payload: {
                name: 'test-name2',
                email: 'test-email2'
            }
        })
        ).toEqual({
            user: {
                name: 'test-name2',
                email: 'test-email2'
            },
        
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
        });
    });

    it('should handle EDIT_USER_REQUEST', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
            
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
            }, {
            type: types.EDIT_USER_REQUEST
        })
        ).toEqual({
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
        
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
        
            editUserRequest: true,
            editUserFailed: false
        });
    });

    it('should handle EDIT_USER_FAILED', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
            
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
            
                editUserRequest: true,
                editUserFailed: false
            }, {
            type: types.EDIT_USER_FAILED
        })
        ).toEqual({
            user: {
                name: 'test-name1',
                email: 'test-email1'
            },
        
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
            editUserFailed: true
        });
    });

    it('should handle EDIT_USER_SUCCESS', () => {
        expect(
            authReducer({
                user: {
                    name: 'test-name1',
                    email: 'test-email1'
                },
            
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
            
                editUserRequest: true,
                editUserFailed: false
            }, {
            type: types.EDIT_USER_SUCCESS,
            payload: {
                name: 'test-name2',
                email: 'test-email2'
            }
        })
        ).toEqual({
            user: {
                name: 'test-name2',
                email: 'test-email2'
            },
        
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
        });
    });
});