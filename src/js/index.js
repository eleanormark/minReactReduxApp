import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../js/store/index";
import App from "../js/components/App";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// console.log('I am a boilerplate :-)');

// import store from "../js/store/index";
// import { addArticle } from "../js/actions/index";

// // export store as a global variable so we can access its methods.
// window.store = store;
// window.addArticle = addArticle;
