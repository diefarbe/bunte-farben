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
                        lineHeight: this.props.height * 1.3 + "px",
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
                position: "absolute",
                top: (this.props.y) + "%",
                left: (this.props.x + 1.4) + "%",
                width: (this.props.width - .5) + "%",
                height: (this.props.height - .5) + "%",
                backgroundColor: this.props.selected ? "#666" : "#333",
                color: "#FFF",
                borderRadius: "5px",
                textAlign: "center",
                verticalAlign: "center",
                fontSize: "12px",
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
        case "leftPipe":
        case "rightPipe":
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
        case "multiply":
            return "*";
        case "divide":
            return "/"
        case "substract":
            return "-"
        default:
            if (text.includes("numpad")) {
                return text.substr(6, text.length);
            }
            return text;
    }
}