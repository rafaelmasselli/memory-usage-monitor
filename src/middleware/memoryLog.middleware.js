class MemoryLogMiddleware {
  handle(next) {
    const memoryBefore = process.memoryUsage().heapUsed;
    next();
    const memoryAfter = process.memoryUsage().heapUsed;
    const memoryUsed = memoryAfter - memoryBefore;

    console.log(`Memória antes da operação: ${memoryBefore} bytes`);
    console.log(`Memória depois da operação: ${memoryAfter} bytes`);
    console.log(`Uso de memória durante a operação: ${memoryUsed} bytes`);
  }
}

module.exports = MemoryLogMiddleware;
