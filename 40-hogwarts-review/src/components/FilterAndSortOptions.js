import React, { Component } from 'react'

export default class FilterAndSortOptions extends Component {
  
  render() {
    return (
      <div>
        <label>Greased </label>
        <input 
          type="checkbox"
          onChange={this.props.toggleFilterGreased}
          // onClick={() => this.props.toggleFilterGreased()}
          checked={this.props.filterGreased}
        />
        <br/>
        <label>Sort </label>
        <select 
          onChange={(event) => this.props.updateSort(event.target.value)}
          value={this.props.sortBy}
        >
          <option value={null}> - None - </option>
          <option value="alphabetical">Alphabetically</option>
          <option value="weight">By Weight</option>
        </select>
      </div>
    )
  }
}
