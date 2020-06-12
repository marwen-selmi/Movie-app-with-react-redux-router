import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./js/store/store";
import AppRouter from "./router/AppRouter";
// import { moviesData } from "./component/data";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
