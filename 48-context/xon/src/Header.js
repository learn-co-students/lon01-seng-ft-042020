import React from "react";
import LoginLogout from "./LoginLogout";
import UserAvatar from "./UserAvatar";

function Header({ handleLogin, loggedIn }) {
  return (
    <div>
      <h1>XoN</h1>
      <LoginLogout handleLogin={handleLogin} loggedIn={loggedIn} />
      <UserAvatar />
    </div>
  );
}

export default Header;
