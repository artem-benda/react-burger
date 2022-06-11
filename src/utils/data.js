const API_BASE_URL = "https://norma.nomoreparties.space/api";

const checkReponse = (res) => {
   return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
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
   return fetch(`${API_BASE_URL}/ingredients`)
      .then(checkReponse)
      .then(checkSuccess)
      .then(responseEntity => responseEntity.data);
}

export function placeOrder(ingredientsIds) {
   const data = { ingredients: ingredientsIds }
   return postData(`${API_BASE_URL}/orders`, data)
      .then(checkReponse)
      .then(checkSuccess)
}