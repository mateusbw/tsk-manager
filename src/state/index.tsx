import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import container from "../container";
import { taskReducer, TaskState } from "./task/task";

export type State = {
  tasks: TaskState;
};

const reducers = combineReducers({
  tasks: taskReducer,
});

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(container)))
);

type StateProviderProps = {
  children: React.ReactNode;
};
const StateProvider = ({ children }: StateProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
