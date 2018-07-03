import * as React from "react";

export class SmallKey extends React.Component<{
    text: string,
    width: number,
    height: number,
    x: number,
    y: number
}, {}> {

    render() {
        const horizontalMultiplier = 2;
        const verticalMultiple = 6;
        const leftSpace = 40;

        return <div
            key={this.props.text}
            style={{
                top: this.props.y * horizontalMultiplier,
                left: this.props.x * verticalMultiple + leftSpace,
                position: "absolute",
                width: this.props.width * verticalMultiple + "px",
                height: this.props.height * horizontalMultiplier + "px",
                backgroundColor: "#000000",
                color: "#FFF",
                textAlign: "center",
                verticalAlign: "center",
                lineHeight: this.props.height * horizontalMultiplier + "px",
                fontSize: "10px",
                borderStyle: "solid",
                borderColor: "red",
                borderWidth: "1px 1px",
            }}>
            {this.props.text}
        </div>

    }
}