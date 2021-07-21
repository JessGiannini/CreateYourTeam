const Employee = require("../lib/employee.js");

describe("Employee", () => {
  describe("initialization", () => {
    it("Makes employee", () => {
      const person = new Employee();
      expect(typeof person).toBe("object");
    });
  });

  describe("methods", () => {
    it("returns name when you call getName", () => {
      const testEmployee = new Employee("Mark", 16, "mark@mark.com");
      expect(testEmployee.getName()).toBe("Mark");
    });
    it("return Id when call get Id", () => {
      const testEmployee = new Employee("Mark", 16, "mark@mark.com");
      expect(testEmployee.getId()).toBe(16);
    });
    it("return role when call get Role", () => {
      const testEmployee = new Employee("Mark", 16, "mark@mark.com");
      expect(testEmployee.getEmail()).toBe("mark@mark.com");
    });
    it("returns name when you call getRole", () => {
      const testEmployee = new Employee("Mark", 16, "mark@mark.com");
      expect(testEmployee.getRole()).toBe("Employee");
    });
  });
});
// npm test -- Employee.test.js
