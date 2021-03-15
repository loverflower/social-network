import { connect } from "react-redux";
import React from "react";

import {
  getCurrentUserProfuleCreator,
  updateStatus,
} from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";

import { hocComponent } from "../hocs/hocs";
import { compose } from "redux";
import Spinner from "../common/Spinner";

const { default: MypostContainer } = require("./Myposts/MypostsContainer");
const { default: ProfileInfo } = require("./ProfileInfo");

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log(this.props);
    if (!userId && this.props.auth.auth) userId = this.props.auth.id;
    this.props.getCurrentUserProfuleCreator(userId);
    // getCurrentProfileAPI(userId).then((res) => {
    //   this.props.setUserProfile(res.data);
    // });
  }

  render() {
    return (
      <>
        {this.props.isRenderingProfile && <Spinner />}
        <ProfileInfo state={this.props.state} />
        <MypostContainer updateStatus={this.props.updateStatus} />
      </>
    );
  }
}

const mapsPropsToState = (state) => {
  return {
    state: state.profilePage.currentProfilePage,
    isRenderingProfile: state.profilePage.isRenderingProfile,
    auth: state.auth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserProfile: (obj) => {
//       dispatch(setUserProfile(obj));
//     },
//   };
// };

// const ProfileContainerHoc = (props) => {
//   console.log(props);
//   if (!props.asAuth) return <Redirect to="/login" />;
//   return <ProfileContainerClass {...props} />;
// };

const ProfileContainer = compose(
  connect(mapsPropsToState, {
    getCurrentUserProfuleCreator,
    updateStatus,
  }),
  withRouter,
  hocComponent
)(ProfileContainerClass);

// let wrapper = hocComponent(ProfileContainerClass);
// const urlContainer = withRouter(wrapper);

// const ProfileContainer = connect(mapsPropsToState, {
//   getCurrentUserProfuleCreator,
// })(urlContainer);

export default ProfileContainer;
