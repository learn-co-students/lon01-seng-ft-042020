import React from "react";

class Header extends React.Component {
  render() {
    return <h1 className="header">{`${this.props.n} Paintings!`}</h1>;
  }
}

export default Header;
