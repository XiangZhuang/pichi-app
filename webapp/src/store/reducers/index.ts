import modalReducer from "./ModalReducer";
import { Action, Reducer, State } from "../types";

const combineReducers = (reducers: { [key: string]: Reducer }) => {
  return (state: State, action: Action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const reducer = combineReducers({
  modal: modalReducer,
});

export default reducer;
