import * as React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component<{}, {}> {

    render() {
        return <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/keyboard'>keyboard</Link></li>
                </ul>
            </nav>
        </header>
    }
}
