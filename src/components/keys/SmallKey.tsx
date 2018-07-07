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
        const name = prettyName(this.props.text);
        const horizontalMultiplier = 3;

        let keyName =
            <div
                style={{
                    lineHeight: this.props.height * horizontalMultiplier + "px",
                }}>
                {name}
            </div>
        if (name.includes(" ")) {
            const split = name.split(" ");

            keyName =
                <div
                    style={{
                        lineHeight: this.props.height * 1.5 + "px",
                    }}
                >
                    <div>{split[0]}</div>
                    <div>{split[1]}</div>
                </div>

        }

        return <div
            key={this.props.text}
            onClick={this.props.buttonClicked}
            style={{
                top: (this.props.y + 1.5) + "%",
                left: (this.props.x + 1.5) + "%",
                position: "absolute",
                width: this.props.width + "%",
                height: this.props.height + "%",
                backgroundColor: this.props.selected ? "#666" : "#333",
                color: "#FFF",
                borderRadius: "5",
                textAlign: "center",
                verticalAlign: "center",
                fontSize: "12px",
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: "1px 1px",
            }}>
            {keyName}
        </div>

    }
}


function prettyName(text: string) {
    switch (text) {
        case "altLeft":
        case "altRight":
            return "alt";
        case "leftWindowKey":
        case "rightWindowKey":
            return "❖";
        case "ctrRight":
        case "ctrLeft":
            return "ctrl";
        case "leftArrow":
            return "⇦";
        case "rightArrow":
            return "⇨";
        case "downArrow":
            return "⇩";
        case "upArrow":
            return "⇧";
        case "shiftLeft":
        case "shiftRight":
            return "⇧";
        case "backTick":
            return "~ `";
        case "dash":
            return "_ -";
        case "equalSign":
            return "+ =";
        case "openBracket":
            return "{ [";
        case "closeBracket":
            return "} ]";
        case "backSlash":
            return "| \\";
        case "backspace":
            return "←";
        case "forwardSlash":
            return "? /";
        case "period":
            return "> .";
        case "comma":
            return "< .";
        case "semiColon":
            return ": ;";
        case "singleQuote":
            return "\" '"
        case "escape":
            return "esc";
        case "Left Pipe":
        case "Right Pipe":
            return ""
        case "NumPad_ENTER":
        case "return":
            return "↵"
        case "NumPad_Decimal":
            return ". del"
        case "pageUp":
            return "page up"
        case "pageDown":
            return "page down"
        case "printScreen":
            return "prt src";
        case "screenLock":
            return "scr lk";
        case "Macro1":
            return "Brt"
        case "Macro2":
            return "⏯"
        case "Macro3":
            return "⏭";
        case "capsLock":
            return "⇪";
        case "numLock":
            return "num";
        default:
            if (text.includes("numpad")) {
                return text.substr(6, text.length);
            }
            return text;
    }
}