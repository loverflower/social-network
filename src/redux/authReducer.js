import { stopSubmit } from "redux-form";
import { autirizationUser, getApi, unlogUserAPI } from "../components/api/api";

const AUTHORIZATION = "AUTHORIZATION";
const UNLOG_USER = "UNLOG_USER";

let initialization = {
  id: null,
  email: null,
  login: null,
  auth: false,
};

export const setAuthorization = (id, login, email) => {
  return {
    type: AUTHORIZATION,
    data: { id, login, email },
  };
};

const unLogUserAC = () => {
  return {
    type: UNLOG_USER,
  };
};

const setAuth = (state = initialization, action) => {
  switch (action.type) {
    case AUTHORIZATION:
      return {
        ...state,
        id: action.data.id,
        login: action.data.login,
        email: action.data.email,
        auth: true,
      };
    case UNLOG_USER:
      return {
        ...state,
        id: null,
        login: null,
        email: null,
        auth: false,
      };
    default:
      return state;
  }
};

export const autorization = () => (dispatch) => {
  return getApi().then((data) => {
    const { id, login, email } = { ...data.data };
    console.log(id);
    if (data.resultCode === 0) dispatch(setAuthorization(id, login, email));
  });
};

export default setAuth;

export const loginUser = (obj) => (dispatch) => {
  autirizationUser(obj).then((res) => {
    console.log(res);
    if (res.data.resultCode === 0) {
      dispatch(autorization());
    } else {
      let action = stopSubmit("LoginForm", {
        _error:
          res.data.messages.length > 0
            ? res.data.messages[0]
            : "Something Wrong",
      });
      dispatch(action);
    }
  });
};

export const unlogUsers = () => (dispatch) => {
  unlogUserAPI().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(unLogUserAC());
    }
  });
};
