import {
  getCurrentProfileAPI,
  getUsersStatusAPI,
  setStatusCreatorAPI,
} from "../components/api/api";

const ADD_POST = "ADD_POST";
const CHANGE_AREA = "CHANGE_AREA";
const SET_PROFILE_USERS = "SET_PROFILE_USERS";
const GET_USERS_STATUS = "GET_USERS_STATUS";
const IS_RENDERING_PROFILE = "IS_RENDERING_PROFILE";
const SET_USERS_STATUS = "SET_USERS_STATUS";

let initialization = {
  postProps: [
    { name: "dima", messages: "This is wall", id: "1", likes: "15" },
    { name: "sacha", messages: "I did it", id: "2", likes: "30" },
  ],
  currentMessage: "",
  currentProfilePage: null,
  currentUserStatus: "",
  isRenderingProfile: false,
};
export const updateCreatorButton = () => ({
  type: ADD_POST,
});

export const updateCreatorTextArea = (text) => ({
  type: CHANGE_AREA,
  currentMessage: text,
});

export const setUserProfile = (obj) => {
  return {
    type: SET_PROFILE_USERS,
    profile: obj,
  };
};

export const isRenderingProfile = (bool) => {
  return {
    type: IS_RENDERING_PROFILE,
    rendering: bool,
  };
};

export const getUsersStatus = (status) => {
  return {
    type: GET_USERS_STATUS,
    currentStatus: status,
  };
};

export const updateStatus = (status) => {
  console.log(status);
  return {
    type: SET_USERS_STATUS,
    currentStatus: status,
  };
};

const profileReducer = (state = initialization, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newState = { ...state };
      newState.postProps = [...state.postProps];
      // if (action.currentMessage === "") return newState;
      newState.postProps.push({
        id: 5,
        messages: `${newState.currentMessage}`,
        likes: 30,
        name: `Sara`,
      });
      newState.currentMessage = "";
      return newState;
    }
    case CHANGE_AREA:
      let newState = { ...state };
      newState.currentMessage = action.currentMessage;
      return newState;

    case SET_PROFILE_USERS:
      return {
        ...state,
        currentProfilePage: action.profile,
      };

    case GET_USERS_STATUS:
      return {
        ...state,
        currentUserStatus: action.currentStatus,
      };

    case SET_USERS_STATUS:
      return {
        ...state,
        currentUserStatus: action.currentStatus,
      };

    case IS_RENDERING_PROFILE:
      return {
        ...state,
        isRenderingProfile: action.rendering,
      };

    default:
      return state;
  }
};

const getUsersCreator = (currentUsers) => (dispatch) => {
  getUsersStatusAPI(currentUsers).then((res) => {
    dispatch(getUsersStatus(res.data));
    dispatch(isRenderingProfile(false));
  });
};

export const getCurrentUserProfuleCreator = (id) => (dispatch) => {
  dispatch(isRenderingProfile(true));
  getCurrentProfileAPI(id).then((res) => {
    dispatch(setUserProfile(res.data));
  });

  getUsersCreator(id)(dispatch);
  // getUsersStatusAPI(id).then((res) => {
  //   dispatch(getUsersStatus(res.data));
  // });
};

export const setStatusCreator = (text) => (dispatch) => {
  setStatusCreatorAPI(text).then((res) => {
    console.log(res);
    if (res.data.resultCode === 0) {
      dispatch(updateStatus(text));
    }
  });
};
export default profileReducer;
