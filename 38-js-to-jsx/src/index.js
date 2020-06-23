const mainDiv = React.createElement("div", {}, [
  React.createElement("h1", {}, "hello"),
  React.createElement("h2", {}, "hi"),
  React.createElement("div", {}, [
    React.createElement("p", {}, "my name is"),
    React.createElement("p", {}, "daniel"),
  ]),
]);

ReactDOM.render(mainDiv, document.querySelector("#main"));
