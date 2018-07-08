import { Component } from "react";
import * as React from "react";
import { SmallKey } from "./keys/SmallKey";
import { KeyModel } from "../keyboards/KeyModel";

export type KeyboardProps = {
    onKeySelected: (key: KeyModel) => any;
    keys: any
}

export class Keyboard extends Component<KeyboardProps, {}> {

    shouldComponentUpdate(nextProps: any) {
        return true;
    }

    render() {
        const data = require("../../assets/en_US");
        let keys = data.map((keyModel: KeyModel) => {

            const onClick = () => {
                this.props.onKeySelected(keyModel);
            }
            const isSelected = this.props.keys.hasOwnProperty(keyModel.shortName);

            return <div
                key={keyModel.shortName}
            >
                <SmallKey
                    selected={isSelected}
                    buttonClicked={onClick}
                    text={keyModel.description}
                    width={keyModel.width}
                    height={keyModel.height}
                    y={keyModel.topLeftCoordinates.y}
                    x={keyModel.topLeftCoordinates.x}
                />
            </div>;

        });

        return <div style={{
            position: "relative",
            width: "100%",
            height: "275px",
            background: "#ccc",
        }}>
            {keys}
        </div>
    }
}