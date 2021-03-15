import React from "react";

import {
  currentDisplayCreator,
  addDisplayCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { hocComponent } from "../hocs/hocs";
import { compose } from "redux";

// const DialogsContainer = (props) => {
//   const dialogState = props.state.getState().messagePage;

//   const currentDialogs = (displayMessage) => {
//     props.state.dispatch({
//       type: currentDisplayCreator(),
//       body: displayMessage,
//     });
//   };

//   const addDialogs = () => {
//     props.state.dispatch({
//       type: addDisplayCreator(),
//     });
//   };

//   return (
//     <Dialogs
//       currentDialogs={currentDialogs}
//       addDialogs={addDialogs}
//       dialogState={dialogState}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogState: state.messagePage,
    // asAuth: state.auth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentDialogs: (displayMessage) => {
      dispatch({
        type: currentDisplayCreator(),
        body: displayMessage,
      });
    },
    addDialogs: () => {
      dispatch({
        type: addDisplayCreator(),
      });
    },
  };
};

// const ProfileContainerHoc = (props) => {
//   if (!props.asAuth) return <Redirect to="/login" />;
//   return <Dialogs {...props} />;
// };

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  hocComponent
)(Dialogs);

// const wrapper = hocComponent(Dialogs);
// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(wrapper);

export default DialogsContainer;
