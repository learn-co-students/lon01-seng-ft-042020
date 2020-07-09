import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserAvatar({ loggedIn }) {
  const context = useContext(UserContext);

  return (
    <div>
      {!loggedIn ? (
        <p>{`hello ${context.user} 😃 `}</p>
      ) : (
        <p>no user logged in</p>
      )}
    </div>
  );
}

export default UserAvatar;
