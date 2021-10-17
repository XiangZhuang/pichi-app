import { createContext, ReactNode, useContext, useReducer } from "react";
import reducer from "./reducers";
import initialState from "./states";

const Context = createContext({});

export const AppStateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppState = () => {
  return useContext(Context);
};
