import * as React from "react";
import { Switch, Route } from "react-router";
import { Home } from "../pages/Home";
import { Keyboard } from "../pages/Keyboard";

export class Main extends React.Component<{}, {}> {

    showSettings(event: any) {
        event.preventDefault();
    }

    render() {
        return <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/keyboard" component={Keyboard} />
            </Switch>
        </main>
    }
}
