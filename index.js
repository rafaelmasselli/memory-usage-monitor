const express = require("express");
const v8 = require("v8");

const router = require("./src/router/index.router");

const app = express();
const port = 3000;

v8.setFlagsFromString("--max_old_space_size=8192");
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`project running http://localhost:3000`);
});
