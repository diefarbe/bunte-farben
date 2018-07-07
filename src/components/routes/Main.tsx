import * as React from "react";
import { Switch, Route } from "react-router";
import { Home } from "../pages/Home";
import Basic from "../pages/Basic";

export class Main extends React.Component<{}, {}> {

    showSettings(event: any) {
        event.preventDefault();
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return <main style={{flex: 1}}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/basic" component={Basic} />
            </Switch>
        </main>
    }
}
