import React from "react";

class Painting extends React.Component {
  // this can be thought of as equivalent to
  // the initialize method in ruby
  constructor() {
    super();
    // state is just your usual js object
    this.state = {
      fontSize: 12,
    };
  }

  handleClick = () => {
    // console.log(`i have been clicked ${+new Date()}`);
    // this is wrong - you shouldn't ever change state directly
    // this.state.fontSize = 600;

    // this is fine:
    this.setState(
      {
        fontSize: this.state.fontSize + 1,
      },
      () => console.log(`Font size after the click: ${this.state.fontSize}`)
    );
  };

  paintingSize = () => {
    return this.state.fontSize > 22
      ? " this is a big painting"
      : " this is a small painting";
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        <p
          style={{
            backgroundColor: this.props.dominantColour,
            color: this.props.dominantColour === "black" ? "white" : "black",
            fontSize: this.state.fontSize,
          }}
        >
          {`${this.props.title} font size: ${this.state.fontSize}`}
          {this.paintingSize()}
        </p>
      </li>
    );
  }
}

export default Painting;
