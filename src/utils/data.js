import axios from 'axios';
import TokenService from './token';

const checkReponse = (res) => {
   if (res.status < 200 || res.status >= 300) {
      throw Error();
   }
   return res.data;
 };

 const checkSuccess = responseEntity => {
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
       config.headers["Authorization"] = 'Bearer ' + token;
     }
     return config;
   },
   (error) => {
     return Promise.reject(error);
   }
 );
 
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
       if (err.response.status === 401 && !originalConfig._retry) {
         originalConfig._retry = true;
 
         try {
           const rs = await api.post("auth/token", {
             token: localRefreshToken,
           })
           .then(checkReponse)
           .then(checkSuccess);
 
           const { accessToken } = rs.data;
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

export function getIngredients() {
   return api.get("ingredients")
      .then(checkReponse)
      .then(checkSuccess)
      .then(responseEntity => responseEntity.data);
}

export function placeOrder(ingredients) {
   return api.post("orders", {ingredients})
      .then(checkReponse)
      .then(checkSuccess);
}

export function sendPasswordResetCode(email) {
   return api.post("password-reset", {email})
      .then(checkReponse)
      .then(checkSuccess);
}

export function resetPassword(password, token) {
   return api.post("password-reset/reset", {password, token})
      .then(checkReponse)
      .then(checkSuccess);
}

export function register(email, password, name) {
   return api.post("auth/register", {email, password, name})
      .then(checkReponse)
      .then(checkSuccess)
      .then(data => {
        const { refreshToken, accessToken } = data;
        TokenService.updateLocalRefreshToken(refreshToken);
        TokenService.updateLocalAccessToken(accessToken.split('Bearer ')[1]);
        return data;
      });
}

export function login(email, password) {
   return api.post("auth/login", {email, password})
      .then(checkReponse)
      .then(checkSuccess)
      .then(data => {
        const { refreshToken, accessToken } = data;
        TokenService.updateLocalRefreshToken(refreshToken);
        TokenService.updateLocalAccessToken(accessToken.split('Bearer ')[1]);
        return data;
      });
}

export function logout() {
   const token = TokenService.getLocalRefreshToken();

   return api.post("auth/logout", {token})
      .then(checkReponse)
      .then(checkSuccess);
}

export function getUser() {
   return api.get("auth/user")
      .then(checkReponse)
      .then(checkSuccess);
}

export function editUser(data) {
   return api.patch("auth/user", data)
      .then(checkReponse)
      .then(checkSuccess);
}
