import * as React from "react";
import { HashRouter } from 'react-router-dom';
import { Header } from "./routes/Header";
import { Main } from "./routes/Main";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<{}, {}> {

    render() {
        return <HashRouter>
            <div>
                <Header />
                <Main />
            </div>
        </HashRouter>

    }
}