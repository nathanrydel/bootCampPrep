// WRITE YOUR TESTS HERE!

describe("replaceWith", function () {
  it("replaces a character with another", function () {
    expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz");
  });
  it("does care about case", function () {
    expect(replaceWith("Foo", "F", "B")).toEqual("Boo");
  });
  it("really cares about case", function () {
    expect(replaceWith("AwEsOmE", "E", "z")).toEqual("AwzsOmz");
  });
});

describe("expand", function () {
  it("copies an array a certain number of times", function () {
    expect(expand([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
  it("even works one time if requested", function () {
    expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"]);
  });
});

describe("acceptNumbersOnly", function () {
  it("returns true if all elements are numbers", function () {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBeTrue();
  });
  it("does not like strings", function () {
    expect(acceptNumbersOnly(1, "foo")).toBeFalse();
  });
  it("does not like booleans", function () {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, true)).toBeFalse();
  });
  it("does not like NaNs", function () {
    expect(acceptNumbersOnly(2, 4, 6, 8, 0, NaN)).toBeFalse();
  });
});

describe("mergeArrays", function () {
  it("takes in two arrays and returns a new sorted array", function () {
    expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("mergeObjects", function () {
  it("combines objects", function () {
    expect(mergeObjects({ name: "Elie" }, { job: "Instructor" })).toEqual({
      name: "Elie",
      job: "Instructor"
    });
  });
  it("overwrites they same keys in objects", function () {
    expect(mergeObjects({ name: "Foo", num: 33 }, { test: "Thing", num: 55 })).toEqual({
      name: "Foo",
      test: "Thing",
      num: 55
    });
  });
});