import * as React from 'react'
import { ChromePicker, ColorResult } from 'react-color'

export type ButtonProps = {
  text: string;
  onColorChanged: (color: string, key: string) => void;
}

class ColorPopup extends React.Component<ButtonProps> {
  state = {
    displayColorPicker: false,
    currentColor: this.getRandomColor(),
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.props.onColorChanged(this.state.currentColor, this.props.text);
    this.setState({ displayColorPicker: false })
  };

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onColorChanged = (color: ColorResult) => {
    this.setState({ currentColor: color.hex })
  }

  render() {
    return <div>
      <div
        style={{
          width: "100%",
          height: "35px",
          background: this.state.currentColor,
        }}
        onClick={this.handleClick}>Pick a {this.props.text} Color</div>
      {this.state.displayColorPicker ? <div style={{
        position: 'absolute',
        zIndex: (2 as any),
      }}>
        <div
          style={{
            position: "fixed",
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }}
          onClick={this.handleClose}
        />
        <ChromePicker color={this.state.currentColor} onChangeComplete={this.onColorChanged} />
      </div> : <div />}
    </div>
  }
}

export default ColorPopup
