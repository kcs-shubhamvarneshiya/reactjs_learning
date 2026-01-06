import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { store } from "./app/store";
import { hydrateAuth } from "./app/slices/authSlice";
import { loadAuth } from "./features/auth/auth.storage";
import App from "./App";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";

const auth = loadAuth();
if (auth) {
  store.dispatch(hydrateAuth(auth));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
