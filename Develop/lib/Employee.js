// TODO: Write code to define and export the Employee class

class Employee {
    constructor ( name, id, email, role ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";
    };

    getName(){
    console.log(`Name: ${this.name}`)
    return this.name
    }

    getId(){
    console.log(`ID#: ${this.id}`)
    return this.id
    }

    getEmail(){
    console.log(`Email: ${this.email}`)
    return this.email
    }

    getRole() {
    console.log(`Role: ${this.role}`)
    return this.role
    }

    }

module.exports = Employee;
