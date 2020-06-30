import React from "react";

const Stock = (props) => {
  const { name, price } = props.stock;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{"PRICE " + price}</p>
          <button
            onClick={() => {
              props.changeStockOwnership(name);
            }}
          >
            trade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stock;
