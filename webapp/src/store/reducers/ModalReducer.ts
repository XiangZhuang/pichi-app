import { Action, Reducer, State } from "../types";

const modalReducer: Reducer = (state: State, action: Action) => {
  const { type, data = {} } = action;
  switch (type) {
    case "MODAL_SHOW_PHOTO": {
      const photo = data.photo;
      return {
        ...state,
        modal: {
          ...state.modal,
          show: true,
          photo,
        },
      };
    }
    case "MODAL_HIDE_PHOTO": {
      return {
        ...state,
        modal: {
          ...state.modal,
          show: false,
        },
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
