const API_BASE_URL = "https://norma.nomoreparties.space/api";

const checkReponse = (res) => {
   return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
 };

export function getIngredients() {
   return fetch(`${API_BASE_URL}/ingredients`)
      .then(checkReponse)
      .then(responseEntity => {
         if (responseEntity.success) {
            return responseEntity.data
         } else {
            throw Error();
         }
      })

}

export function mapErrorToMessage(e) {
   return "Сервис временно недоступен, обратитесь к администратору"
}