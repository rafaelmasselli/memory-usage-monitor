class memoryIntensiveService {
  handle() {
    const largeArray = new Array(1e6).fill("some data");
    const processedArray = largeArray.map((item) => item.toUpperCase());
    return processedArray;
  }
}

module.exports = memoryIntensiveService;
