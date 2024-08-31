import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import StepperContextProvider from "./contexts/StepperContextProvider.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StepperContextProvider>
        <AuthContextProvider>
          <PersistGate loading={null} persistor={persistor}>
          <div>
            <RouterProvider router={router} />
            <ToastContainer />
          </div>
          </PersistGate>
        </AuthContextProvider>
      </StepperContextProvider>
    </Provider>
  </React.StrictMode>
);
