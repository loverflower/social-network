import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import setAuth from "./authReducer";
import thunkMiddleWire from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./AppReducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: setAuth,
  form: formReducer,
  app: appReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleWire));

window.store = store;
export default store;
