const os = require("os-utils");

class monitorMemoryMiddleware {
  handle(next) {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: ${JSON.stringify(memoryUsage)}`);
    os.cpuUsage(function (v) {
      console.log("CPU Usage (%): " + v);
    });
    next();
  }
}

module.exports = monitorMemoryMiddleware;
