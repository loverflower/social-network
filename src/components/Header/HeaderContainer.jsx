import { connect } from "react-redux";
import React from "react";

import Header from "./Header";
import { autorization, unlogUsers } from "../../redux/authReducer";

class HeaderContainerClass extends React.Component {
  componentDidMount() {
    this.props.callback();
    // getApi().then((data) => {
    //   const { id, login, email } = { ...data.data };
    //   this.props.setAuthorization(id, login, email);
    //   return id;
    // });
  }

  render() {
    return <Header state={this.props} />;
  }
}

const mapsPropsToState = (state) => {
  return {
    state: state.auth,
  };
};

const mapsPropsToProps = (dispatch) => {
  return {
    callback: () => dispatch(autorization),
    unlogUser: () => dispatch(unlogUsers()),
  };
};

const HeaderContainer = connect(
  mapsPropsToState,
  mapsPropsToProps
)(HeaderContainerClass);
export default HeaderContainer;
