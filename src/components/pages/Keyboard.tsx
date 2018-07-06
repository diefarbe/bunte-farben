import { Component } from "react";
import * as React from "react";
import { SmallKey } from "../keys/SmallKey";
import { enUS, KeyModel } from "../../keyboards/en-US";
import { PhotoshopPicker, SketchPicker, ColorResult } from "react-color";
import { connectComponent } from "../utils/connectComponent";
import { setKeysColor } from "../actions/ApiActions";

class Keyboard extends Component<{ actions: any, keys: any }, {}> {

    shouldComponentUpdate(nextProps: any) {
        console.log("UPDATES?");
        return true;
    }


    render() {

        const data = require("../../../assets/en_US");

        console.log("DATA:");
        let keys = data.map((keyModel: KeyModel) => {

            const onClick = () => {
                this.props.actions.keySelected(keyModel);
            }

            return <div
                key={keyModel.shortName}
            >
                <SmallKey
                    selected={this.props.keys.hasOwnProperty(keyModel.shortName)}
                    buttonClicked={onClick}
                    text={keyModel.description}
                    width={keyModel.width}
                    height={keyModel.height}
                    y={keyModel.topLeftCoordinates.y}
                    x={keyModel.topLeftCoordinates.x}
                />
            </div>;

        });

        const handleChangeComplete = (color: ColorResult) => {
            setKeysColor(this.props.keys, color);
        };

        return <div>
            <div>
                <div style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    background: "#ccc",
                }}>
                    {keys}
                </div>
            </div>
            <div style={{

            }}>
                <SketchPicker
                    disableAlpha={true}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
        </div>
    }
}

export default connectComponent(["keys"], Keyboard)