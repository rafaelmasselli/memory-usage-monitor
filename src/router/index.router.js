const MemoryIntensiveController = require("../controller/memoryIntensive.controller");
const express = require("express");
const router = express.Router();

const memoryIntensiveController = new MemoryIntensiveController();

router.get("/", (req, res) => {
  memoryIntensiveController.handle(req, res);
});

module.exports = router;
