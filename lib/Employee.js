class Employee {
    //employee contructor
    constructor(employeeName, employeeId, employeeEmail, employeeRole = 'Employee'){
        this.name = employeeName;
        this.id= employeeId;
        this.email = employeeEmail;
        this.role = employeeRole;

    }
    

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee
// module.exports = Employee;
