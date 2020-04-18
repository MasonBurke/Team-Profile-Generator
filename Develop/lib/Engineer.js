// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, role, github){
    super(name, id, email,)
    this.github = github
    this.role = role
    }

    getRole(){
        console.log(`Role: ${this.role}`)
    }
    getGithub(){
        console.log(`Github: ${this.github}`)
    }        
}
    const newEngineer = new Engineer ("Zach", 95, "zach@yahoo.com", "Engineer", "zAc4arY")
console.log("---Engineer---")
newEngineer.getName()
newEngineer.getId()
newEngineer.getEmail()
newEngineer.getRole()
newEngineer.getGithub()
