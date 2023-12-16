const MemoryIntensiveService = require("../services/memoryIntensive.service");

class MemoryIntensiveController {
  constructor() {
    this.service = new MemoryIntensiveService();
  }

  handle(req, res) {
    const data = this.service.handle();
    res.status(200).json({
      message: "operation carried out successfully",
      bigArray: data,
    });   
  }
}

module.exports = MemoryIntensiveController;
