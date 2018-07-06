import * as React from "react";

export class SmallKey extends React.Component<{
    text: string,
    width: number,
    height: number,
    x: number,
    y: number,
    selected: boolean,
    buttonClicked: VoidFunction
}, {}> {

    render() {
        const horizontalMultiplier = 3;
        const verticalMultiple = 9;
        const leftSpace = 40;

        return <div
            key={this.props.text}
            onClick={this.props.buttonClicked}
            style={{
                top: this.props.y * horizontalMultiplier,
                left: this.props.x * verticalMultiple + leftSpace,
                position: "absolute",
                width: this.props.width * verticalMultiple + "px",
                height: this.props.height * horizontalMultiplier + "px",
                backgroundColor: this.props.selected ? "red" : "green",
                color: "#FFF",
                textAlign: "center",
                verticalAlign: "center",
                lineHeight: this.props.height * horizontalMultiplier + "px",
                fontSize: "10px",
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: "1px 1px",
            }}>
            {this.props.text}
        </div>

    }
}