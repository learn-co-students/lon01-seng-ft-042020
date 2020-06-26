import React from "react";

import Form from "./Form";
import Header from "./Header";
import PaintingsContainer from "./PaintingsContainer";

class App extends React.Component {
  state = {
    paintings: [
      { title: "cat", dominantColour: "red" },
      { title: "dog", dominantColour: "brown" },
      { title: "panther", dominantColour: "black" },
      { title: "lion", dominantColour: "yellow" },
      { title: "snake", dominantColour: "green" },
    ],
    title: "",
    dominantColour: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const newPainting = {
      title: this.state.title,
      dominantColour: this.state.dominantColour,
    };

    this.setState({
      paintings: [...this.state.paintings, newPainting],
    });

    event.target.reset();
  };

  handlePaintingTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handlePaintingDominantColour = (event) => {
    this.setState({
      dominantColour: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Header n={this.state.paintings.length} />
        <Form
          handleSubmit={this.handleFormSubmit}
          handlePaintingTitle={this.handlePaintingTitle}
          paintingTitle={this.state.title}
          handlePaintingDominantColour={this.handlePaintingDominantColour}
          paintingDominantColour={this.state.dominantColour}
        />
        <PaintingsContainer paintings={this.state.paintings} />
      </div>
    );
  }
}

export default App;
