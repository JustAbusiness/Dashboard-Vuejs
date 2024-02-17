const authMiddleware = (to, from, next)  => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("token_expires");
    if (!token || !tokenExpiration) {
      next({
        path: "/login",
      });
      return;
    }
  
    const tokenExpirationDatae = new Date(tokenExpiration);
    if (tokenExpirationDatae < new Date()) {
      next({
        path: "/login",
      });
    }
  
    next();
}

export default authMiddleware