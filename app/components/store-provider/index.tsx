"use client";

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface IDispatchType {
  type: "DRAWER";
  value: any;
}

interface IState {
  openDrawer: boolean;
}

export interface IStoreProviderType {
  state: IState;
  dispatch: Dispatch<IDispatchType>;
}

const context = createContext<IStoreProviderType>(null!);

const defaultValues = {
  openDrawer: false,
};

export enum ACTION_TYPE {
  DRAWER = "DRAWER",
}

const reducer = (state: IState, { type, value }: IDispatchType) => {
  switch (type) {
    case ACTION_TYPE.DRAWER:
      state.openDrawer = value;
      break;
    default:
      return state;
  }
  return { ...state };
};

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);
  const value = { state, dispatch };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useStore = () => useContext(context);

export default StoreProvider;
