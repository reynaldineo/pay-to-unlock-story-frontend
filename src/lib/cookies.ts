import Cookies from "universal-cookie";

const cookies = new Cookies();
export const tokenKey = "@reynaldineo/token";

export const getToken = () => cookies.get(tokenKey);

export const setToken = (token: string) =>
  cookies.set(tokenKey, token, { path: "/" });

export const removeToken = () => cookies.remove(tokenKey, { path: "/" });
