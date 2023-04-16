import "animate.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider as StoreProvider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import 'react-slidedown/lib/slidedown.css';
import App from "./components/App";
import {IconsCollection} from "./components/Icon";
import NotificationsList from "./components/NotificationsList";
import {clearExpiredNotifications} from "./helpers/notifications";
import {store} from "./store/store";

import "./styles/classes.css";
import "./styles/index.css";
import "./styles/inputs.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <IconsCollection />
      <App />
    </BrowserRouter>
    <NotificationsList />
  </StoreProvider>
);

// Clear expired notifications
setInterval(clearExpiredNotifications, 1000);
