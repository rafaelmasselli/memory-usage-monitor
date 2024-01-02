const memoryIntensiveOperation = require("../memoryIntensiveOperation");

describe("memoryIntensiveOperation", () => {
  it("should return an array with length 1000000", async () => {
    const result = await memoryIntensiveOperation();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1000000);
  });
});
