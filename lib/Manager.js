// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        // Using the super function to inherit the props and methods from parent 'Employee' class
        super(name, id, email, getName(), getId(), getEmail(), getRole());
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return Manager;
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
    }
}
module.exports = Manager;