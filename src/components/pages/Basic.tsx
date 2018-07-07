import { Component } from "react";
import * as React from "react";
import { SmallKey } from "../keys/SmallKey";
import { enUS, KeyModel } from "../../keyboards/en-US";
import { PhotoshopPicker, SketchPicker, ColorResult } from "react-color";
import { connectComponent } from "../utils/connectComponent";
import { setKeysColor } from "../actions/ApiActions";
import { Keyboard } from "../components/Keyboard";
import ColorPopup from "../components/ColorPopup";
import { TextInput } from "../components/Input";
import { ColorChannel } from "../components/ColorChannel";


export interface ChannelDef {
    [key: string]: any
};

class Basic extends Component<{ actions: any, keys: any }, ChannelDef> {

    constructor(props: any) {
        super(props)
        this.state = {
            "red": {},
            "green": {},
            "blue": {}
        }
    }


    shouldComponentUpdate(nextProps: any) {
        return true;
    }

    handleSubmit = (event: any) => {
        console.log(JSON.stringify(this.state));

        setKeysColor(this.props.keys, [this.state.red, this.state.green, this.state.blue])
        event.preventDefault();
    }

    handleTextChanged = (text: string, key: string, channel?: string) => {
        switch (key) {
            case "upHoldLevel":
            case "downHoldLevel":
            case "upMaximumLevel":
            case "downMinimumLevel":

                text = text.substr(1, text.length - 1);
                console.log("COLORS:" + parseInt("0x" + text.substr(0, 2)));
                console.log("COLORS:" + parseInt("0x" + text.substr(2, 2)));
                console.log("COLORS:" + parseInt("0x" + text.substr(4, 2)));

                this.handleChannelChange(parseInt("0x" + text.substr(0, 2)), key, "red");
                this.handleChannelChange(parseInt("0x" + text.substr(2, 2)), key, "green");
                this.handleChannelChange(parseInt("0x" + text.substr(4, 2)), key, "blue");

                break;
            default:
                if (typeof channel !== "undefined") {
                    this.handleChannelChange(text, key, channel);
                }
        }
    }

    handleChannelChange = (text: string | number, key: string, channel: string) => {
        for (const stateChannelName in this.state) {
            const channelData = this.state[stateChannelName];

            if (channel === stateChannelName) {
                channelData[key] = text;
            }

            let newChannelState: { [key: string]: any } = {};
            newChannelState[stateChannelName] = channelData;
            this.setState(newChannelState)
        }
    }

    render() {


        return <div
            style={{
            }}>
            <div>
                <Keyboard
                    onKeySelected={this.props.actions.keySelected}
                    keys={this.props.keys}
                />
            </div>

            <ColorPopup text={"upHoldLevel"} onColorChanged={this.handleTextChanged} />
            <ColorPopup text={"downHoldLevel"} onColorChanged={this.handleTextChanged} />
            <ColorPopup text={"upMaximumLevel"} onColorChanged={this.handleTextChanged} />
            <ColorPopup text={"downMinimumLevel"} onColorChanged={this.handleTextChanged} />
            <div style={{
                backgroundColor: "#EEE",
                display: "flex",
            }}>

                <ColorChannel channel="red" onChannelChange={this.handleTextChanged} />
                <ColorChannel channel="green" onChannelChange={this.handleTextChanged} />
                <ColorChannel channel="blue" onChannelChange={this.handleTextChanged} />

                <div style={{
                    flex: "0 0 15%",
                }}>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Send To Keyboard" />
                    </form >
                </div >

            </div>
        </div>
    }
}

export default connectComponent(["keys"], Basic)