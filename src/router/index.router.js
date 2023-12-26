const memoryIntensiveController = require("../controller/memoryIntensive.controller");
const monitorMemoryMiddleware = require("../middleware/monitorMemory.middleware");
const memoryLog = require("../middleware/memoryLog.middleware");
const cacheMiddleware = require("../middleware/cache.middleware");
const express = require("express");
const router = express.Router();


router.get("/", (req, res, next) => {
  new memoryLog().handle(next),
    new monitorMemoryMiddleware().handle(next),
    new cacheMiddleware().handle(req, res, next);
    new memoryIntensiveController().handle(req, res);
});

module.exports = router;
