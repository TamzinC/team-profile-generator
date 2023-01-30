// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        // Using the super function to inherit the props and methods from parent 'Employee' class
        super(name, id, email, getName(), getId(), getEmail(), getRole());
        this.school = school;
    }
    
    getSchool() {
        console.log(this.school);
    }

    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;