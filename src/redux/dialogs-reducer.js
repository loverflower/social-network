const CURRENT_DISPLAY_MESSAGE = "CURRENT_DISPLAY_MESSAGE";
const ADD_DISPLAY_MESSAGE = "ADD_DISPLAY_MESSAGE";
let initialization = {
  postdata: [
    { name: "Evgen", id: "1", likes: "15" },
    { name: "Andrew", id: "2", dislikes: "30" },
  ],
  postMessages: [
    { name: "Evgen", messages: "HI are you", id: "1" },
    { name: "Andrew", messages: "my first post", id: "2", dislikes: "30" },
  ],
  displayMessage: "",
};
export const currentDisplayCreator = () => {
  return CURRENT_DISPLAY_MESSAGE;
};

export const addDisplayCreator = () => {
  return ADD_DISPLAY_MESSAGE;
};

const dialogsReducer = (state = initialization, action) => {
  switch (action.type) {
    case CURRENT_DISPLAY_MESSAGE: {
      let newState = { ...state };

      newState.displayMessage = action.body;
      return newState;
    }
    case ADD_DISPLAY_MESSAGE:
      let newState = { ...state };
      if (action.displayMessage === "") {
        return newState;
      }
      newState.postMessages = [...state.postMessages];
      newState.postMessages.push({
        name: "sergo",
        messages: newState.displayMessage,
        id: "2",
      });
      newState.displayMessage = "";
      return newState;
    default:
      return state;
  }
};

//   if (action.type === CURRENT_DISPLAY_MESSAGE) {

//   } else if (action.type === ADD_DISPLAY_MESSAGE) {
//     state.postMessages.push({
//       name: "sergo",
//       messages: state.displayMessage,
//       id: "2",
//     });
//     state.displayMessage = "";
//   }
//   return state;
// };

export default dialogsReducer;
