const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  describe("initialization", () => {
    it("Makes Engineer", () => {
      const person = new Engineer();
      expect(typeof person).toBe("object");
    });
  });

  describe("methods", () => {
    it("returns name when you call get GitHub", () => {
      const testEmployee = new Engineer(
        "Mark",
        16,
        "mark@mark.com",
        "MarkGitHub"
      );
      expect(testEmployee.getGitHub()).toBe("MarkGitHub");
    });
    it("returns name when you call getRole", () => {
      const testEmployee = new Engineer(
        "Mark",
        16,
        "mark@mark.com",
        "MarkGitHub"
      );
      expect(testEmployee.getRole()).toBe("Engineer");
    });
  });
});

//npm test -- Engineer.test.js
