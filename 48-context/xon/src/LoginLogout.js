import React, { useContext } from "react";
import UserContext from "./UserContext";

function LoginLogout({ handleLogin }) {
  const context = useContext(UserContext);
  return (
    <button onClick={handleLogin}>
      {!context.loggedIn ? "log in" : "log out"}
    </button>
  );
}

export default LoginLogout;
