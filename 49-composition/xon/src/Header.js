import React from "react";

function Header({ children }) {
  return (
    <div>
      <h1>XoN</h1>
      {children}
    </div>
  );
}

export default Header;
