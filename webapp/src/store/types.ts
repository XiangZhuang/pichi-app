export type Action = {
  type: string;
  data: { [key: string]: any };
};

export type State = {
  [key: string]: any;
};

export type Reducer = (state: State, action: Action) => State;

export type Dispatch = (action: Action) => any;
