const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const explore = require("./explore.router");
const history = require("./history.router");
const watch = require("./watch.router");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/explore", explore);
app.use("/history", history);
app.use("/watch", watch);

app.get("/", (req, res) => {
  res.send("Hello Earth!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
