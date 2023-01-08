const express = require("express"),
  http = require("http");

const hostname = "localhost";
const port = 3000;

const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
const nationRouter = require("./routes/nationRouter");
const playerRouter = require("./routes/playerRouter");

app.use("/nations", nationRouter);
app.use("/players", playerRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
