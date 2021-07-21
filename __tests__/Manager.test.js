const Manager = require("../lib/manager.js");

describe("Manager", () => {
  describe("initialization", () => {
    it("Makes Manager", () => {
      const person = new Manager();
      expect(typeof person).toBe("object");
    });
  });

  describe("methods", () => {
    it("returns office number when you call getOfficeNumber", () => {
      const testEmployee = new Manager("Mark", 16, "mark@mark.com", "456");
      expect(testEmployee.getOfficeNumber()).toBe("456");
    });
    it("returns name when you call getRole", () => {
      const testEmployee = new Manager("Mark", 16, "mark@mark.com", "456");
      expect(testEmployee.getRole()).toBe("Manager");
    });
  });
});

//npm test -- Manager.test.js
