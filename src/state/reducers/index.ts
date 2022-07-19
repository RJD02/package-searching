import { combineReducers } from "redux";
import reducer from "./repositoriesReducer";

const reducers = combineReducers({
  repo: reducer,
});

export default reducers;
