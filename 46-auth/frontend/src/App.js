import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
  };

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.setState({ loggedIn: true });
    }
  };

  handleCreate = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username, password } = this.state;
    const userData = { username, password };
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        return res;
      })
      .then(console.log);
  };

  handleLogin = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username, password } = this.state;
    const userData = { username, password };
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        this.setState({
          loggedIn: true,
        });
        return res;
      })
      .then(console.log);
  };

  getToken = () => {
    return localStorage.getItem("jwt");
  };
  // Authorization: `Bearer ${this.getToken()}`,

  logOut = () => {
    localStorage.removeItem("jwt");
    this.setState({
      loggedIn: false,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  getUserName = () => {
    return JSON.parse(atob(this.getToken().split(".")[1])).username;
  };

  getAllUsers = () => {
    fetch("http://localhost:3000/api/v1/all_users", {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then(console.log);
  };

  render() {
    return (
      <div className="App">
        <h1>
          super secure application{" "}
          <span role="img" aria-label="supposedly a criminal of sorts">
            🦹‍♂️
          </span>
        </h1>

        <p>
          {this.state.loggedIn
            ? `logged in as ${this.getUserName()}`
            : `logged out`}
        </p>

        {this.state.loggedIn ? (
          <form onSubmit={this.handleCreate}>
            <input
              id="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="username"
            />
            <input
              id="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="password"
            />
            <input type="submit" value="sign up" />
          </form>
        ) : (
          <form onSubmit={this.handleLogin}>
            <input
              id="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="username"
            />
            <input
              id="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="password"
            />
            <input type="submit" value="log in" />
          </form>
        )}

        <button onClick={this.logOut}>log out</button>
        <button onClick={this.getAllUsers}>show all users</button>
      </div>
    );
  }
}
export default App;
