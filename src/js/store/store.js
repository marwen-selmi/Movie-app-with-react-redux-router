import { createStore } from "redux";
import reducer from "../reducer/reducer";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch({ type: "STARNUMBER", payload: 1 });
