// TODO: Write code to define and export the Employee class

class Employee {
    constructor ( name, id, email ) {
    this.id = id;
    this.name = name;
    this.email = email;
    }

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

    }

    }

    const newEmployee = new Employee ("mason", 32, "masonburke@rocketmail.com")
    newEmployee.getName()
    newEmployee.getId()
    newEmployee.getEmail()


module.exports = Employee











module.exports = Employee;