import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { TaskContextProvider } from "./taskProvider";
import reducer, { initialState } from "./reducer";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TaskContextProvider reducer={reducer} initialState={initialState}>
      <App />
    </TaskContextProvider>
  </StrictMode>,
  rootElement
);
