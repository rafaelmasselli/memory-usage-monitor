const MemoryIntensiveController = require("../controller/memoryIntensive.controller");
const MonitorMemoryMiddleware = require("../middleware/monitorMemory.middleware");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  new MonitorMemoryMiddleware().handle(next),
    new MemoryIntensiveController().handle(req, res);
});

module.exports = router;
