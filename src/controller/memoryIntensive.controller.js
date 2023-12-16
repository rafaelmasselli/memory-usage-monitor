const MemoryIntensiveService = require("../services/memoryIntensive.service");

class MemoryIntensiveController {
  constructor() {
    this.service = new MemoryIntensiveService();
  }

  handle(req, res) {
    const data = this.service.handle();
    res.send(data);
  }
}

module.exports = MemoryIntensiveController;
