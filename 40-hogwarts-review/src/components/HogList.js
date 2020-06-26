import React from "react";

import HogTile from './HogTile'
// import hogs from '../porkers_data'

class HogList extends React.Component {

  renderHogTiles = () => {
    return this.props.hogs.map( (hog, index) => <HogTile key={index} hog={hog} /> )
  }
  
  render() {
    return (
      <div className="ui grid container">
        { this.renderHogTiles() }
      </div>
    );
  }
}

export default HogList;
