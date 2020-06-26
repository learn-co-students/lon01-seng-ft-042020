import React from "react";

import Painting from "./Painting";

class PaintingsContainer extends React.Component {
  render() {
    return (
      <ul>
        {this.props.paintings.map((painting) => {
          return (
            <Painting
              key={painting.dominantColour + painting.title}
              dominantColour={painting.dominantColour}
              title={painting.title}
            />
          );
        })}
      </ul>
    );
  }
}

export default PaintingsContainer;
