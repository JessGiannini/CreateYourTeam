const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("initialization", () => {
    it("Makes Intern", () => {
      const person = new Intern();
      expect(typeof person).toBe("object");
    });
  });

  describe("methods", () => {
    it("returns name of school when you call get School", () => {
      const testEmployee = new Intern(
        "Mark",
        16,
        "mark@mark.com",
        "UC Berkeley"
      );
      expect(testEmployee.getSchool()).toBe("UC Berkeley");
    });
    it("returns name when you call getRole", () => {
      const testEmployee = new Intern(
        "Mark",
        16,
        "mark@mark.com",
        "UC Berkeley"
      );
      expect(testEmployee.getRole()).toBe("Intern");
    });
  });
});

//npm test -- Intern.test.js
