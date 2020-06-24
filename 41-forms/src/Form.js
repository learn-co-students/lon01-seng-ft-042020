import React from "react";

class Form extends React.Component {
  render() {
    // object destructuring
    const {
      handleSubmit,
      handlePaintingTitle,
      handlePaintingDominantColour,
      paintingTitle,
      paintingDominantColour,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          onChange={handlePaintingTitle}
          value={paintingTitle}
        />
        <input
          placeholder="dominant colour"
          onChange={handlePaintingDominantColour}
          value={paintingDominantColour}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
