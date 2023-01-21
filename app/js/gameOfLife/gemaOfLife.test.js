import functionSum from "./gameOfLife";

describe("Given a function functionSum", () => {
  describe("When it recieves 1,6", () => {
    test("then it should return 7", () => {
      const firstNumber = 1;
      const seccondNumber = 6;
      const expectedNumber = 7;

      const result = functionSum(firstNumber, seccondNumber);

      expect(result).toBe(expectedNumber);
    });
  });
});
