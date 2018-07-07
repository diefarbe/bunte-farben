import * as React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component<{}, {}> {

    render() {
        return <header style={{
            flex: "0 0 15%",
            backgroundColor: "grey"
        }}>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/basic'>Basic Setup</Link></li>
                </ul>
            </nav>
        </header>
    }
}
