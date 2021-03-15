import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  definePage,
  getAmountOfUsers,
  isRendering,
  isToogleFollowing,
  getUserCreator,
  setUserCreator,
  setUserFollowCreator,
  setUserUnFollowCreator,
} from "../../redux/users-reducer";

// import Users from "./Users";

import React from "react";

import Users from "./Users";
import Spinner from "../common/Spinner";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.getUserCreator(
      this.props.state.currentPage,
      this.props.state.pageSize
    );
    // this.props.isRendering(true);
    // getUsers(this.props.state.currentPage, this.props.state.pageSize).then(
    //   (data) => {
    //     this.props.isRendering(false);
    //     this.props.getAmountOfUsers(data.totalCount);
    //     this.props.setUsers(data.items);
    //   }
    // );
  }

  setCurrentPage(u) {
    this.props.setUserCreator(u, this.props.state.pageSize);
    // this.props.isRendering(true);
    // this.props.definePage(u);
    // getUsers(u, this.props.state.pageSize).then((data) => {
    //   this.props.isRendering(false);
    //   return this.props.setUsers(data.items);
    // });
  }
  render() {
    return (
      <>
        {this.props.state.isrendering && <Spinner />}
        <Users
          totalUserCount={this.props.state.totalUserCount}
          pageSize={this.props.state.pageSize}
          users={this.props.state.users}
          currentPage={this.props.state.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setCurrentPage={this.setCurrentPage.bind(this)}
          isToogleFollowing={this.props.isToogleFollowing}
          isTooglingFollowingMass={this.props.state.isTooglingFollowing}
          setUserFollowCreator={this.props.setUserFollowCreator}
          setUserUnFollowCreator={this.props.setUserUnFollowCreator}
        />
      </>
    );
  }
}

const mapToState = (state) => {
  return {
    state: state.users,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (currentId) => {
//       dispatch(follow(currentId));
//     },
//     unfollow: (currentId) => {
//       dispatch(unfollow(currentId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     definePage: (page) => {
//       dispatch(definePage(page));
//     },
//     getAmountOfUsers: (total) => {
//       dispatch(getAmountOfUsers(total));
//     },

//     isRendering: (boolean) => {
//       dispatch(isRendering(boolean));
//     },
//   };
// };

const UsersContainer = connect(mapToState, {
  follow,
  unfollow,
  setUsers,
  definePage,
  getAmountOfUsers,
  isRendering,
  isToogleFollowing,
  getUserCreator,
  setUserCreator,
  setUserFollowCreator,

  setUserUnFollowCreator,
})(UsersClass);
export default UsersContainer;
