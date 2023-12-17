const MemoryIntensiveController = require("../controller/memoryIntensive.controller");
const monitorMemoryMiddleware = require("../middleware/monitorMemory.middleware");
const memoryLog = require("../middleware/memoryLog.middleware");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  new memoryLog().handle(next),
  new monitorMemoryMiddleware().handle(next),
    new MemoryIntensiveController().handle(req, res);
});

module.exports = router;
