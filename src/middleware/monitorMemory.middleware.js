class monitorMemoryMiddleware {
  handle(next) {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: ${JSON.stringify(memoryUsage)}`);
    next();
  }
}

module.exports = monitorMemoryMiddleware;
