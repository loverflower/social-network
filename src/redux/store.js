import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// let state = {
//   profilePage: {
//     postProps: [
//       { name: "dima", messages: "This is wall", id: "1", likes: "15" },
//       { name: "sacha", messages: "I did it", id: "2", likes: "30" },
//     ],
//     currentMessage: "",
//   },

//   messagePage: {
//     postdata: [
//       { name: "Evgen", id: "1", likes: "15" },
//       { name: "Andrew", id: "2", dislikes: "30" },
//     ],
//     postMessages: [
//       { name: "Evgen", messages: "HI are you", id: "1" },
//       { name: "Andrew", messages: "my first post", id: "2", dislikes: "30" },
//     ],

// export const observer = function (func) {
//   newFunc = func;
// };

// export const addPosts = (text) => {
//   if (text === "") return;

//   state.profilePage.postProps.push({
//     id: 5,
//     messages: `${state.profilePage.currentMessage}`,
//     likes: 30,
//     name: `Sara`,
//   });
//   newFunc(state);
//   state.profilePage.currentMessage = "";
// };

// export const getCurrentValue = (text) => {
//   state.profilePage.currentMessage = text;
//   newFunc(state);
// };

// let store = {
//   _state: {
//     profilePage: {
//       postProps: [
//         { name: "dima", messages: "This is wall", id: "1", likes: "15" },
//         { name: "sacha", messages: "I did it", id: "2", likes: "30" },
//       ],
//       currentMessage: "",
//     },

//     messagePage: {
//       postdata: [
//         { name: "Evgen", id: "1", likes: "15" },
//         { name: "Andrew", id: "2", dislikes: "30" },
//       ],
//       postMessages: [
//         { name: "Evgen", messages: "HI are you", id: "1" },
//         { name: "Andrew", messages: "my first post", id: "2", dislikes: "30" },
//       ],
//       displayMessage: "",
//     },

//     sidebar: {},
//   },
//   subscribe(func) {
//     this._callSubscriber = func;
//   },

//   getState() {
//     return this._state;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagePage = dialogsReducer(this._state.messagePage, action);
//     this._callSubscriber(this._state);
// this._state.sidebar = sidebarReducer(this._state.sidebar, action);

// if (action.type === "ADD-POST") {
//   if (action.currentMessage === "") return;

//   this._state.profilePage.postProps.push({
//     id: 5,
//     messages: `${this._state.profilePage.currentMessage}`,
//     likes: 30,
//     name: `Sara`,
//   });
//   this._newFunc(this._state);
//   this._state.profilePage.currentMessage = "";
// } else if (action.type === "CHANGE-AREA") {
//   this._state.profilePage.currentMessage = action.currentMessage;
//   this._newFunc(this._state);
// } else if (action.type === CURRENT_DISPLAY_MESSAGE) {
//   this._state.messagePage.displayMessage = action.body;
//   this._newFunc(this._state);
// } else if (action.type === ADD_DISPLAY_MESSAGE) {
//   this._state.messagePage.postMessages.push({
//     name: "sergo",
//     messages: this._state.messagePage.displayMessage,
//     id: "2",
//   });
//   this._newFunc(this._state);
//   // }
// },

//   addPosts(text) {
//     if (text === "") return;

//     this._state.profilePage.postProps.push({
//       id: 5,
//       messages: `${this._state.profilePage.currentMessage}`,
//       likes: 30,
//       name: `Sara`,
//     });
//     this._callSubscriber(this._state);
//     this._state.profilePage.currentMessage = "";
//   },

//   getCurrentValue(text) {
//     this._state.profilePage.currentMessage = text;
//     this._callSubscriber(this._state);
//   },
// };

// export { store };
