const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {}
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
