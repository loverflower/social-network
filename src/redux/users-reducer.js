import axios from "axios";
import { followAPI, getUsers, unfollowAPI } from "../components/api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const NUMBER_OF_USERS = "NUMBER_OF_USERS";
const IS_RENDERING = "IS_RENDERING";
const IS_TOOGLE_FOLOWWING = "IS_TOOGLE_FOLOWWING";

let initialization = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isrendering: false,
  isTooglingFollowing: [],
  isTooglingCondition: false,
};
export const follow = (currentId) => {
  return { type: FOLLOW, id: currentId };
};
export const unfollow = (currentId) => {
  return { type: UNFOLLOW, id: currentId };
};

export const setUsers = (users) => {
  return { type: SET_USERS, users: users };
};

export const definePage = (page) => {
  return { type: CURRENT_PAGE, page: page };
};

export const getAmountOfUsers = (numberofusers) => {
  return {
    type: NUMBER_OF_USERS,
    numberofusers: numberofusers,
  };
};

export const isRendering = (boolean) => {
  return {
    type: IS_RENDERING,
    isrendering: boolean,
  };
};

export const isToogleFollowing = (id, isrender) => {
  return {
    type: IS_TOOGLE_FOLOWWING,
    id: id,
    isrender: isrender,
  };
};

const usersReducer = (state = initialization, action) => {
  switch (action.type) {
    case UNFOLLOW:
      return {
        ...state,
        users: [...state.users].map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: false };
          } else return el;
        }),
      };

    case FOLLOW:
      return {
        ...state,
        users: [...state.users].map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: true };
          } else return el;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };

    case CURRENT_PAGE:
      return { ...state, currentPage: action.page };

    case NUMBER_OF_USERS:
      return { ...state, totalUserCount: action.numberofusers };

    case IS_RENDERING:
      return { ...state, isrendering: action.isrendering };

    case IS_TOOGLE_FOLOWWING:
      return {
        ...state,
        isTooglingFollowing: action.isrender
          ? [...state.isTooglingFollowing, action.id]
          : state.isTooglingFollowing.filter((el) => el !== action.id),
      };
    default:
      return state;
  }
};
export const getUserCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(isRendering(true));
  getUsers(currentPage, pageSize).then((data) => {
    dispatch(isRendering(false));
    dispatch(getAmountOfUsers(data.totalCount));
    dispatch(setUsers(data.items));
  });
};

export const setUserCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(isRendering(true));
  dispatch(definePage(currentPage));
  getUsers(currentPage, pageSize).then((data) => {
    dispatch(isRendering(false));
    return dispatch(setUsers(data.items));
  });
};

export const setUserUnFollowCreator = (id) => (dispatch) => {
  dispatch(isToogleFollowing(id, true));
  // axios
  //   .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
  //     withCredentials: true,
  //     headers: {
  //       "API-KEY": "5db89f3a-0182-4b71-878f-62d40e90c6ed",
  //     },
  //   })

  unfollowAPI(id).then((res) => {
    if (res.resultCode === 0) dispatch(unfollow(id));
    dispatch(isToogleFollowing(id, false));
  });
};

export const setUserFollowCreator = (id) => (dispatch) => {
  dispatch(isToogleFollowing(id, true));
  // axios
  //   .post(
  //     `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
  //     {},
  //     {
  //       withCredentials: true,
  //       headers: {
  //         "API-KEY": "5db89f3a-0182-4b71-878f-62d40e90c6ed",
  //       },
  //     }
  //   )
  followAPI(id).then((res) => {
    if (res.resultCode === 0) dispatch(follow(id));
    dispatch(isToogleFollowing(id, false));
  });
};

export default usersReducer;
