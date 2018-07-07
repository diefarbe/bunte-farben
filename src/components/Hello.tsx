import * as React from "react";
import { HashRouter } from 'react-router-dom';
import { Header } from "./routes/Header";
import { Main } from "./routes/Main";
import { getKeyboardData } from "./actions/ApiActions";
import { Provider } from 'react-redux';
import { createStore } from "redux";

export class Hello extends React.Component<{ store: any }, {}> {

    componentDidMount() {
        getKeyboardData();
    }

    render() {
        return <Provider store={this.props.store}>
            <HashRouter>
                <div style={{ display: "flex" }}>
                    <Header />
                    <Main />
                </div>
            </HashRouter>
        </Provider>

    }
}