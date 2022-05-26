const API_BASE_URL = "https://norma.nomoreparties.space/api";

export function getIngredients() {
   return fetch(`${API_BASE_URL}/ingredients`)
      .then(response => response.json())
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