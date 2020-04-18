// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email,role, officeNumber){
    super(name, id, email,)
    this.officeNumber = officeNumber
    this.role = role
    }

getOffice(){
    console.log(`Office number: ${this.officeNumber}`)
}

getRole(){
    console.log(`Role: ${this.role}`)
    }
}

const newManager = new Manager ("Shannon", 45, "shannon@rocketmail.com", "manager", 50)
 console.log("---Manager---")  
    newManager.getName()
    newManager.getId()
    newManager.getEmail()
    newManager.getRole()
    newManager.getOffice()