describe("ghost", function() {
  it('should return a random color', function() {
    expect(['white','yellow','purple','red']).toContain(ghost.color());
  });
});
describe('evenlyDivide', function() {
  it("returns an array of integers that evenly divide the target number", function() {
    expect(evenlyDivide(4)).toEqual([1,2,4]);
    expect(evenlyDivide(5)).toEqual([1,5]);
    expect(evenlyDivide(30)).toEqual([1,2,3,5,6,10,15,30]);
  });
});
describe("lightsabers", function() {
  it("returns 0 for John", function() {
    expect(howManyLightsabersDoYouOwn("John")).toEqual(0);
  });
  it("returns 18 for Zach", function() {
    expect(howManyLightsabersDoYouOwn("Zach")).toEqual(18);
  });
});
describe("last", function() {
  it("returns the last number in an array", function () {
    expect(last([1,5,7])).toEqual(7);
  });
  it("returns the last letter in a string", function () {
    expect(last("xyz")).toEqual('z');
  });
});
describe("palindrome", function() {
  it("returns false on non palindromes", function () {
    expect( palindrome("glenn")).toBeFalsy();
  });
  it( "returns true on palindromes", function () {
    expect( palindrome("anna")).toBeTruthy();
  });
});
describe("solution", function() {
  it("returns a string with short on the outside and long in the middle", function() {
    expect(solution("1","22")).toEqual("1221");
  });
  it("returns the same value even reversed", function() {
    expect(solution("22","1")).toEqual("1221");
  });
});
describe("squareRoot", function() {
  it("says if a number has a integer square root", function() {
    expect(squareRoot(9)).toBeTruthy();
    expect(squareRoot(4096)).toBeTruthy();
  });
  it("says if a number doesnt have a integer square root", function() {
    expect(squareRoot(333)).toBeFalsy();
  });
});
