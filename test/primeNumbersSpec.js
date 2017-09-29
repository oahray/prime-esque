const expect = require('expect');
const primeNumbers = require('../app/primeNumbers');

describe("primeNumbers function:", () => {

  describe("Case for invalid input", () => {
    it("should return error message for negative numbers", () => {
      expect(primeNumbers(-2)).toEqual("No negative input allowed");
    });

    it("should return error message for strings", () => {
      expect(primeNumbers('Chris')).toEqual("Invalid input. Only integers allowed.");
    });

    it("should return error message for objects", () => {
      expect(primeNumbers({})).toEqual("Invalid input. Only integers allowed.");
    });

    it("should return error message for no input", () => {
      expect(primeNumbers()).toEqual("Invalid input. Only integers allowed.");
    });
  });

  describe("Case for positive integer input", () => {

    it("should return an empty array for 0", () => {
      expect(primeNumbers(0)).toEqual([]);
    });

    it("should return [2, 3] for 4", () => {
      expect(primeNumbers(4)).toEqual([2, 3]);
    });

    it("should return [2, 3, 5] for 5", () => {
      expect(primeNumbers(5)).toEqual([2, 3, 5]);
    });

    it("should return [2, 3, 5, 7] for 7", () => {
      expect(primeNumbers(7)).toEqual([2, 3, 5, 7]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59] for 60", () => {
      expect(primeNumbers(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, \
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89] for 93", () => {
      expect(primeNumbers(93)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]);
    });

    it(`should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 
      113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 
      187, 191, 193, 197, 199 ] for 201`, () => {

      expect(primeNumbers(201)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
    });

  });

});