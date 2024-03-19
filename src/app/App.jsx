import React from 'react'
import { Provider } from "mobx-react";

import * as stores from "../stores/Stores";
import { AppView } from "./AppView";

export const App = () => (
  <Provider {...stores}>
    <AppView />
  </Provider>
);

