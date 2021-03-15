const { default: axios } = require("axios");
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "3f65e30c-650f-49ac-9ffb-7190e54be49b",
  },
});
export const getApi = () => {
  return instance.get("auth/me").then((response) => response.data);
};

export const getUsers = (param1, param2) => {
  return instance
    .get(`users?page=${param1}&count=${param2}`)
    .then((response) => response.data);
};

export const followAPI = (id) => {
  return instance.post(`follow/${id}`).then((response) => response.data);
};

export const unfollowAPI = (id) => {
  return instance.delete(`follow/${id}`).then((response) => response.data);
};

export const getCurrentProfileAPI = (id) => {
  return instance.get(`profile/${id}`);
};

export const getUsersStatusAPI = (id) => {
  return instance.get(`profile/status/${id}`);
};

export const setStatusCreatorAPI = (text) => {
  return instance.put(`profile/status`, { status: text });
};

export const autirizationUser = (obj) => {
  return instance.post(`auth/login`, {
    email: obj.email,
    password: obj.password,
    rememberMe: obj.rememberMe,
  });
};
export const unlogUserAPI = () => {
  return instance.delete(`auth/login`);
};
