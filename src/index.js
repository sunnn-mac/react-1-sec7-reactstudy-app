import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

// root idのコンテナをAppで置き換える
ReactDOM.render(<App />, document.getElementById("root"));
