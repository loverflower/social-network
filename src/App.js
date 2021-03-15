import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, withRouter } from "react-router-dom";
import "./App.css";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./components/api/Login/Login";
import { compose } from "redux";
import { autorization } from "./redux/authReducer";
import Spinner from "./components/common/Spinner";
import { appUploadedAC } from "./redux/AppReducer";

class App extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.appuploadedloaded) {
      return <Spinner />;
    }
    // else if (this.props.state.auth.auth) {
    //   return <Redirect to="/profile" />;
    // }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const currentAuth = this.props.autorization();
    Promise.all([currentAuth]).then((e) => {
      this.props.appUploadedAC();
    });
  }
}

const mapsPropsToState = (state) => {
  return {
    state: state,
    appuploadedloaded: state.app.appuploaded,
  };
};

export default compose(
  withRouter,
  connect(mapsPropsToState, { autorization, appUploadedAC })
)(App);
