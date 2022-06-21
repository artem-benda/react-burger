import axios from 'axios';

const api = axios.create({
   baseURL: "https://norma.nomoreparties.space/api",
   headers: {
     "Content-Type": "application/json",
   },
 });

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

 /* Эта функция взята из примера с сайта developer.mozilla.org с небольшими изменениями */
 async function postData(url = '', data = {}) {
   // Default options are marked with *
   const response = await fetch(url, {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     mode: 'cors', // no-cors, *cors, same-origin
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     credentials: 'same-origin', // include, *same-origin, omit
     headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
     redirect: 'follow', // manual, *follow, error
     referrerPolicy: 'no-referrer', // no-referrer, *client
     body: JSON.stringify(data) // body data type must match "Content-Type" header
   });
   return await response;
 }

export function getIngredients() {
   return api.get("ingredients")
      .then(checkReponse)
      .then(checkSuccess)
      .then(responseEntity => responseEntity.data);
}

export function placeOrder(ingredientsIds) {
   const data = { ingredients: ingredientsIds }
   return api.post("orders", data)
      .then(checkReponse)
      .then(checkSuccess)
}