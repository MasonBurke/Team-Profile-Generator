// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email,role, school){
super(name, id, email)
this.role = role
this.school = school
}

getSchool(){
console.log(`School: ${this.school}`)
}

getRole(){
    console.log(`Role: ${this.role}`)
}
}

const newIntern = new Intern ("Rob", 22, "rvbfish@yahoo.com", "intern", "Denver University")
console.log("---Intern---")
newIntern.getName()
newIntern.getId();
newIntern.getEmail()
newIntern.getRole()
newIntern.getSchool()