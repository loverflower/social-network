import React from "react";
import { connect } from "react-redux";

import {
  setStatusCreator,
  updateCreatorButton,
  updateCreatorTextArea,
} from "./../../../redux/profile-reducer";

import Mypost from "./Myposts";

const mapsStateToProps = (state) => {
  console.log(state);
  return {
    currentData: state.profilePage,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    clickButtonWall: () => {
      dispatch(updateCreatorButton());
    },
    changeTextareaWall: (currentMessage) => {
      dispatch(updateCreatorTextArea(currentMessage));
    },
    updateStatus: (text) => {
      dispatch(setStatusCreator(text));
    },
  };
};

const MypostContainer = connect(mapsStateToProps, mapsDispatchToProps)(Mypost);

export default MypostContainer;
