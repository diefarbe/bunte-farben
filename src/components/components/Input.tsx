

import * as React from "react";

export type TextInputProps = {
    text: string,
    onTextChange: (text: string, key: string) => void;
}

export class TextInput extends React.Component<TextInputProps, {}> {

    handleChange = (event: any) => {
        this.props.onTextChange(event.target.value, this.props.text)
    }

    render() {
        return <div style={{height: "25px"}}>
            <label>
                {this.props.text}:
            </label>
            <input style={{
                float: "right"
            }}type="number" name={this.props.text} onChange={this.handleChange}  />
        </div>

    }
}