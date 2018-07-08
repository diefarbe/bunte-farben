import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { createStore } from "redux";
import rootReducer from './reducers';

const store = createStore(rootReducer)

ReactDOM.render(
    <Hello store={store} />,
    document.getElementById("root")
);

