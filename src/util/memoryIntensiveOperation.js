function memoryIntensiveOperation() {
  return new Promise((resolve, reject) => {
    try {
      const largeArray = new Array(1e6).fill("some data");
      const processedArray = largeArray.map((item) => item.toUpperCase());
      largeArray.length = 0;
      resolve(processedArray);
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = memoryIntensiveOperation;
