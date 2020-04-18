// TODO: Write code to define and export the Employee class

class Employee {
    constructor ( name, id, email, role ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    };

    getName(){
    console.log(`Name: ${this.name}`)
    }

    getId(){
    console.log(`ID#: ${this.id}`)
    }

    getEmail(){
    console.log(`Email: ${this.email}`)
    }

    getRole(){
    console.log(`Role: ${this.role}`)
    }

    }

    const newEmployee = new Employee ("mason", 32, "masonburke@rocketmail.com", "employee")
    console.log("--employee--")
    newEmployee.getName()
    newEmployee.getId()
    newEmployee.getEmail()
    newEmployee.getRole()


module.exports = Employee;
