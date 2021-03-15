const UPLOAD_DATA_APP = "UPLOAD_DATA_APP";

let initialization = {
  appuploaded: false,
};

export const appUploadedAC = () => {
  return {
    type: UPLOAD_DATA_APP,
  };
};

const appReducer = (state = initialization, action) => {
  switch (action.type) {
    case UPLOAD_DATA_APP:
      return {
        ...state,
        appuploaded: true,
      };

    default:
      return state;
  }
};

export default appReducer;
