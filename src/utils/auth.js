


export const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
};