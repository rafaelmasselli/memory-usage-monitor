const router = require("./src/router/index.router");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`project running http://localhost:3000`);
});
