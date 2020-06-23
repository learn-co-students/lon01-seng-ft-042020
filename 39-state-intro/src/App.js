import React from "react";

import Header from "./Header";
import PaintingsContainer from "./PaintingsContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header n={this.props.paintings.length} />
        <PaintingsContainer paintings={this.props.paintings} />
      </div>
    );
  }
}

export default App;
