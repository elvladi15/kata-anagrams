describe("a suite of tests", () => {
  this.timeout(10000);
  it("Should take less than 10000 ms", () => {
    setTimeout(getAnagramSets(), 10000);
  });
});
