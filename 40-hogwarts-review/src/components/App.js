import React, { Component } from "react";

import Nav from "./Nav";
import FilterAndSortOptions from './FilterAndSortOptions'
import HogList from "./HogList";

import hogs from "../porkers_data";
import "../App.css";

class App extends Component {
    
  state = {
    currentHogs: hogs,
    filterGreased: false,
    medalFilter: "bronze",
    sortBy: " - None - ", // "alphabetical", "weight"
  }

  updateSort = (newSort) => {
    this.setState({ sortBy: newSort })
  }

  toggleFilterGreased = () => {
    this.setState({ filterGreased: !this.state.filterGreased })
  }

  hogsToRender = () => {
    const hogsToRender = this.state.filterGreased
    ? this.state.currentHogs.filter( hog => hog.greased )
    : [...this.state.currentHogs]

    if (this.state.sortBy == "alphabetical") {
      hogsToRender.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (b.name < a.name) {
          return 1
        } else {
          return 0
        }
      })
    } else if (this.state.sortBy == "weight") {
      hogsToRender.sort((a, b) => a.weight - b.weight)
    }

    return hogsToRender
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <FilterAndSortOptions 
          filterGreased={this.state.filterGreased}
          toggleFilterGreased={this.toggleFilterGreased}
          sortBy={this.state.sortBy}
          updateSort={this.updateSort}
        />
        <br/><br/>
        <HogList hogs={this.hogsToRender()}/>
      </div>
    );
  }
}

export default App;
