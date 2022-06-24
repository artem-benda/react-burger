class TokenService {
  getLocalRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  getLocalAccessToken() {
    return localStorage.getItem("accessToken");
  }

  updateLocalAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  updateLocalRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
  }
}

export default new TokenService();
