

import * as React from "react";
import { TextInput } from "./Input";

export type TextInputProps = {
    channel: "red" | "green" | "blue"
    onChannelChange: (text: string, key: string, channel: "red" | "green" | "blue") => void;
}

export class ColorChannel extends React.Component<TextInputProps, {}> {

    handleTextChanged = (text: string, key: string) => {
        this.props.onChannelChange(text, key, this.props.channel)
    }


    handleChange = (event: any) => {
        this.props.onChannelChange(event.target.value, "direction", this.props.channel)
    }

    handleAnimateChange = (event: any) => {
        this.props.onChannelChange(event.target.value, "transition", this.props.channel)
    }

    render() {
        return <div>
            <TextInput text={"downHoldDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"upHoldDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"upIncrement"} onTextChange={this.handleTextChanged} />
            <TextInput text={"downDecrement"} onTextChange={this.handleTextChanged} />
            <TextInput text={"upIncrementDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"downDecrementDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"startDelay"} onTextChange={this.handleTextChanged} />
            <TextInput text={"effectId"} onTextChange={this.handleTextChanged} />
            <select defaultValue="inc" onChange={this.handleChange}>
                <option value="inc">Increment</option>
                <option value="dec">Decrement</option>
                <option value="incDec">Increment Decrement (repeat)</option>
                <option value="decInc">Decrement Increment (repeat)</option>
            </select>
            <form onChange={this.handleAnimateChange}>
                <input type="radio" name="animate" value="true" /> Animate
                <input type="radio" name="animate" value="false" /> Dont Animate
            </form>

        </div >
    }
}