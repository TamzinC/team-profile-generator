// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        // Using the super function to inherit the props and methods from parent 'Employee' class
        super(name, id, email, getName(), getId(), getEmail(), getRole());
        this.gitHub = gitHub;
    }

    getGitHub() {
        console.log(this.gitHub);
    }
    
    getRole() {
        return Engineer;
    }
}
module.exports = Engineer;