import axios, { AxiosResponse } from 'axios';
import TokenService from './token';
import { IIngredient, TUser } from './types';

const checkReponse = (res: AxiosResponse) => {
   if (res.status < 200 || res.status >= 300) {
      throw Error();
   }
   return res.data;
};

interface IBackendResponse {
  success: boolean;
}

 function checkSuccess<T extends IBackendResponse>(responseEntity: T): T {
   if (responseEntity.success) {
      return responseEntity;
   } else {
      throw Error();
   }
};

const api = axios.create({
   baseURL: "https://norma.nomoreparties.space/api",
   headers: {
     "Content-Type": "application/json",
   },
 });

api.interceptors.request.use(
  (config) => {
     const token = TokenService.getLocalAccessToken();
     if (token) {
        if (config.headers === undefined) {
          config.headers = {};
        }
        config.headers["Authorization"] = 'Bearer ' + token;
     }
     return config;
  },
  (error) => {
     return Promise.reject(error);
  }
);

interface IAuthenticateResponse extends IBackendResponse {
  refreshToken: string;
  accessToken: string;
}
 
api.interceptors.response.use(
   (res) => {
     return res;
   },
   async (err) => {
     const originalConfig = err.config;

     const localRefreshToken = TokenService.getLocalRefreshToken();
 
     if (originalConfig.url !== "auth/register" &&
         originalConfig.url !== "password-reset" &&
         originalConfig.url !== "password-reset/reset" &&
         originalConfig.url !== "auth/token" &&
         !!localRefreshToken &&
         err.response) {
       // Access Token was expired
       if ((err.response.status === 403) && !originalConfig._retry) {
         originalConfig._retry = true;
 
         try {
           const rs = await api.post<IAuthenticateResponse>("auth/token", {
             token: localRefreshToken,
           })
           .then(checkReponse)
           .then(responseEntity => checkSuccess<IAuthenticateResponse>(responseEntity));
 
           const { accessToken } = rs;
           TokenService.updateLocalAccessToken(accessToken);
 
           return api(originalConfig);
         } catch (_error) {
           return Promise.reject(_error);
         }
       }
     }
 
     return Promise.reject(err);
   }
 );

interface IGetIngredientsResponse extends IBackendResponse {
  data: Array<IIngredient>
}

export function getIngredients(): Promise<Array<IIngredient>> {
   return api.get<IGetIngredientsResponse>("ingredients")
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IGetIngredientsResponse>(responseEntity))
      .then(responseEntity => responseEntity.data);
}

interface IPlaceOrderResponse extends IBackendResponse {
  order: { number: string };
}

export function placeOrder(ingredients: Array<string>): Promise<IPlaceOrderResponse> {
   return api.post<IPlaceOrderResponse>("orders", {ingredients})
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IPlaceOrderResponse>(responseEntity));
}

export function sendPasswordResetCode(email: string): Promise<IBackendResponse> {
   return api.post<IBackendResponse>("password-reset", {email})
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IBackendResponse>(responseEntity));
}

export function resetPassword(password: string, token: string): Promise<IBackendResponse> {
   return api.post<IBackendResponse>("password-reset/reset", {password, token})
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IBackendResponse>(responseEntity));
}

export function register(email: string, password: string, name: string): Promise<IAuthenticateResponse> {
   return api.post<IAuthenticateResponse>("auth/register", {email, password, name})
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IAuthenticateResponse>(responseEntity))
      .then(data => {
        const { refreshToken, accessToken } = data;
        TokenService.updateLocalRefreshToken(refreshToken);
        TokenService.updateLocalAccessToken(accessToken.split('Bearer ')[1]);
        return data;
      });
}

export function login(email: string, password: string): Promise<IAuthenticateResponse> {
   return api.post<IAuthenticateResponse>("auth/login", {email, password})
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IAuthenticateResponse>(responseEntity))
      .then(data => {
        const { refreshToken, accessToken } = data;
        TokenService.updateLocalRefreshToken(refreshToken);
        TokenService.updateLocalAccessToken(accessToken.split('Bearer ')[1]);
        return data;
      });
}

export function logout(): Promise<IBackendResponse> {
   const token = TokenService.getLocalRefreshToken();

   return api.post<IBackendResponse>("auth/logout", {token})
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IBackendResponse>(responseEntity))
      .then(data => {
        TokenService.removeTokens();
        return data;
      });
}

interface IGetUserResponse extends IBackendResponse {
  user: TUser
}

export function getUser(): Promise<TUser> {
   return api.get<IGetUserResponse>("auth/user")
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IGetUserResponse>(responseEntity))
      .then(data => data.user);
}

type TEditUserParams = {
  email?: string;
  name?: string;
  password?: string;
}

export function editUser(data: TEditUserParams): Promise<IBackendResponse> {
   return api.patch<IBackendResponse>("auth/user", data)
      .then(checkReponse)
      .then(responseEntity => checkSuccess<IBackendResponse>(responseEntity));
}
