

import * as React from "react";
import { TextInput } from "./Input";
import { FormEvent } from "react";

export type TextInputProps = {
    channel: "red" | "green" | "blue"
    onChannelChange: (text: string, key: string, channel: "red" | "green" | "blue") => void;
}

export class ColorChannelBasic extends React.Component<TextInputProps, {}> {

    handleTextChanged = (text: string, key: string) => {
        this.props.onChannelChange(text, key, this.props.channel)
    }


    handleChange = (event: any) => {
        this.props.onChannelChange(event.target.value, "direction", this.props.channel)
    }

    handleAnimateChange = (event: any) => {
        this.props.onChannelChange(event.target.value, "transition", this.props.channel)
    }

    handleMoveChange = (event: any) => {
        this.props.onChannelChange(event.target.value, "shouldMove", this.props.channel)
    }


    render() {
        return <div>
            <TextInput text={"stepsBetweenColors"} onTextChange={this.handleTextChanged} />
            <TextInput text={"downHoldDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"upHoldDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"upIncrementDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"downDecrementDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"startDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"effectId"} onTextChange={this.handleTextChanged} />
            <form onChange={this.handleMoveChange}>
                <input type="radio" name="shouldMove" value="true" /> Move <br />
                <input type="radio" name="shouldMove" value="false" /> Don't Move
            </form>
            <form onChange={this.handleAnimateChange}>
                <input type="radio" name="animate" value="true" /> Animate <br />
                <input type="radio" name="animate" value="false" /> Don't Animate
            </form>

        </div >
    }
}