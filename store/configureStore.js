import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
