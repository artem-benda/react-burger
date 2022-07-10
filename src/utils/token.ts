class TokenService {
  getLocalRefreshToken(): string | null {
    return localStorage.getItem("refreshToken");
  }

  getLocalAccessToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  updateLocalAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }

  updateLocalRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }

  removeTokens() {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  }
}

export default new TokenService();
