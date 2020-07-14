const http = require("http");

const selectRandomAction = () => {
  const actions = ["INCREMENT", "DECREMENT", "ZERO"];
  return actions[Math.floor(Math.random() * actions.length)];
};

http
  .createServer((req, res) => {
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
