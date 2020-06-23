import React from "react";

class Painting extends React.Component {
  render() {
    return (
      <li>
        <p
          style={{
            backgroundColor: this.props.dominantColour,
            color: this.props.dominantColour === "black" ? "white" : "black",
          }}
        >
          {this.props.title}
        </p>
      </li>
    );
  }
}

export default Painting;
