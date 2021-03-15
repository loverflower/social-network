import React from "react";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import App from "./App";
import { addPosts, getCurrentValue } from "./redux/state";
export const updateDom = (state) => {
  ReactDOM.render(
    <App
      postdata={state.messagePage.postdata}
      myPosts={state.profilePage}
      postMessages={state.messagePage.postMessages}
      addPosts={addPosts}
      getCurrentValue={getCurrentValue}
    />,
    document.getElementById("root")
  );
};

serviceWorker.unregister();
