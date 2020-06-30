import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    propertyToFilterBy: "",
    propertyToSortBy: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((data) => data.json())
      .then((stocks) => this.setState({ stocks }));
  }

  handleFilterPropertyChange = (event) => {
    const filterType = event.target.value;
    this.setState({ propertyToFilterBy: filterType });
  };

  handlepropertyToSortByChange = (event) => {
    const propertyToSortBy = event.target.value.toLowerCase();
    this.setState({ propertyToSortBy: propertyToSortBy });
  };

  filterStocksByType = () => {
    const stocks = this.state.stocks;
    const propertyToFilterBy = this.state.propertyToFilterBy;

    if (propertyToFilterBy.length === 0) {
      return stocks;
    }

    return stocks.filter((stock) => stock.type === propertyToFilterBy);
  };

  sortStocks = (stocksArray) => {
    const sortBy = this.state.propertyToSortBy;
    return stocksArray.sort((a, b) => {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  };

  splitStocksByOwnership = (stocksArray) => {
    const stocksAfterSplitting = { owned: [], notOwned: [] };
    stocksArray.forEach((stock) => {
      if (stock.owned) {
        stocksAfterSplitting.owned.push(stock);
      } else {
        stocksAfterSplitting.notOwned.push(stock);
      }
    });
    return stocksAfterSplitting;
  };

  changeStockOwnership = (stockName) => {
    const stockToTrade = this.state.stocks.find(
      (stock) => stock.name === stockName
    );
    stockToTrade.owned = !stockToTrade.owned;
    const remainingStocks = this.state.stocks.filter(
      (stock) => stock.name !== stockName
    );
    this.setState({ stocks: [...remainingStocks, stockToTrade] });
  };

  prepareStocks = () => {
    return this.splitStocksByOwnership(
      this.sortStocks(this.filterStocksByType())
    );
  };

  render() {
    return (
      <div>
        <SearchBar
          handleFilterPropertyChange={this.handleFilterPropertyChange}
          handlepropertyToSortByChange={this.handlepropertyToSortByChange}
          propertyToSortBy={this.state.propertyToSortBy}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              changeStockOwnership={this.changeStockOwnership}
              stocks={this.prepareStocks().notOwned}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              changeStockOwnership={this.changeStockOwnership}
              stocks={this.prepareStocks().owned}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
