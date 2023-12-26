const os = require("os-utils");

class MonitorMemoryMiddleware {
  handle(next) {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: ${JSON.stringify(memoryUsage)}`);

    os.cpuUsage(function (cpuUsage) {
      console.log("CPU Usage (%): " + cpuUsage);
    });

    next();
  }
}

module.exports = MonitorMemoryMiddleware;
