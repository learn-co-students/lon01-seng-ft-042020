import React, { useState, useEffect } from "react";
import PasswordSearchContainer from "./PasswordSearchContainer";
import Header from "./Header";
import UserContext from "./UserContext";
import LoginLogout from "./LoginLogout";
import UserAvatar from "./UserAvatar";
import "./App.css";
import { keccak512 } from "js-sha3";

function App() {
  const STATES = {
    ERROR: "error",
    SUCCESS: "success",
    CHECKING: "checking",
    INPUT: "input",
  };

  const [password, setPassword] = useState("123456");
  const [passwordList, setPasswordList] = useState([]);
  const [breachCount, setBreachCount] = useState(0);
  const [currentOperation, setCurrentOperation] = useState("input");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/passwords")
      .then((d) => d.json())
      .then((passwords) => {
        setPasswordList(passwords);
      });
  }, []);

  const handleLogin = () => {
    if (!loggedIn) {
      setLoggedIn(true);
      setUser("daniel");
    } else {
      setLoggedIn(false);
      setUser(null);
    }
  };

  const handleCheck = (password) => {
    setCurrentOperation("checking");
    const hash = keccak512(password);

    fetch(
      `https://passwords.xposedornot.com/api/v1/pass/anon/${hash.slice(0, 10)}`
    )
      .then((d) => d.json())
      .then((data) => {
        if (!data.Error) {
          setCurrentOperation(STATES.SUCCESS);
          const count = data.SearchPassAnon.count;
          setBreachCount(count);
        } else {
          setCurrentOperation(STATES.ERROR);
          setBreachCount(0);
        }
      });
  };

  const reportAppState = () => {
    if (currentOperation === STATES.INPUT) return <p>please input pw</p>;
    if (currentOperation === STATES.CHECKING) return <p>checking ... </p>;
    if (currentOperation === STATES.SUCCESS) {
      return <p>the password was found in {breachCount} breaches </p>;
    }
    if (currentOperation === STATES.ERROR) {
      return <p> SOMETHING HAS GONE WRONG! </p>;
    }
  };

  return (
    <UserContext.Provider value={{ user, loggedIn }}>
      <div className="App">
        <Header>
          <LoginLogout handleLogin={handleLogin} loggedIn={loggedIn} />
          <UserAvatar />
        </Header>
        {loggedIn ? (
          <div>
            <PasswordSearchContainer
              password={password}
              setPassword={setPassword}
              passwordList={passwordList}
              handleCheck={handleCheck}
            />
            {reportAppState()}
          </div>
        ) : null}
      </div>
    </UserContext.Provider>
  );
}

export default App;
