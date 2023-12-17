class memoryLogMiddleware {
  handle(next) {
    const memoryBefore = process.memoryUsage().heapUsed;
    const memoryAfter = process.memoryUsage().heapUsed;
    const memoryUsed = memoryAfter - memoryBefore;

    console.log(`Memória antes da operação: ${memoryBefore} bytes`);
    console.log(`Memória depois da operação: ${memoryAfter} bytes`);
    console.log(`Uso de memória durante a operação: ${memoryUsed} bytes`);
    next();
  }
}

module.exports = memoryLogMiddleware;
