// use nodemon

const http = require("http");

const selectRandomAction = () => {
  const actions = ["DECREMENT", "INCREMENT", "ZERO"];
  return actions[Math.floor(Math.random() * 3)];
};

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const action = {
      type: selectRandomAction(),
      source: "API",
      time: +new Date(),
    };
    res.write(JSON.stringify(action));
    res.end();
  })
  .listen(8080);
