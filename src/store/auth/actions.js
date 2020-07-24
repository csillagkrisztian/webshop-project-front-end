import { url } from "../../config/config";
import axios from "axios";

export const userLoggedIn = (me, token) => {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      user: me,
      token: token,
    },
  };
};

export const bootstrapLoginState = () => async (dispatch, getState) => {
  if (localStorage.token) {
    const meConfig = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };
    const mePost = await axios.get(`${url}/auth/me`, meConfig);
    dispatch(userLoggedIn(mePost.data, localStorage.token));
  }
};

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      const loginConfig = { email: email, password: password };
      const loginPost = await axios.post(`${url}/auth/login`, loginConfig);
      console.log({ ...loginPost.data });
      const meConfig = {
        headers: { Authorization: `Bearer ${loginPost.data.jwt}` },
      };

      const mePost = await axios.get(`${url}/auth/me`, meConfig);
      console.log(mePost);
      dispatch(userLoggedIn(mePost.data, loginPost.data.jwt));
      localStorage.setItem("token", loginPost.data.jwt);
    } catch (error) {}
  };
}

export function logout(dispatch, getState) {
  dispatch({ type: "auth/logout" });
  localStorage.removeItem("token");
}
