const memoryIntensiveOperation = require("../util/memoryIntensiveOperation");

class MemoryIntensiveService {
  async handle() {
    try {
      const result = await memoryIntensiveOperation();
      return result;
    } catch (error) {
      console.error("Erro na operação intensiva de memória:", error);
      throw error;
    }
  }
}

module.exports = MemoryIntensiveService;
