import React from "react";

const SearchBar = (props) => {
  const determineIfChecked = (sortingPropertyName, inputPropertyName) => {
    if (sortingPropertyName === inputPropertyName) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Name"
          checked={determineIfChecked(props.propertyToSortBy, "name")}
          onChange={props.handlepropertyToSortByChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={determineIfChecked(props.propertyToSortBy, "price")}
          onChange={props.handlepropertyToSortByChange}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilterPropertyChange}>
          <option value="">no filter</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
