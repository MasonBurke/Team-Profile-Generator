const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");

const myEmployee = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
    {
        name: "name",
        type: "input",
        message: "What is the employees name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is employees ID #?"
    },
    {
        name: "email",
        type: "input",
        message: "What is employees email?"
    },
    {
        name: "role",
        type: "input",
        message: "What is employees role?"
    },
]
const managerQuestions = [
    {
        name: "Office",
        type: "input",
        message: "What is employees office number?"
    },
]
const internQuestions = [
    {
        name: "school",
        type: "input",
        message: "Where did employee attend school?"
    },
]
const engineerQuestions = [
    {
        name: "github",
        type: "input",
        message: "What is employees github account?"
    },
]

function addManager() {
    inquirer.prompt(questions.concat(managerQuestions)).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.Office)
        myEmployee.push(manager)
        createTeam()
    })
}

function createTeam() {
    inquirer.prompt([
        {
            name: "EmployeeChoice",
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore members"]
        }
    ])
        .then(answer => {
            switch (answer.EmployeeChoice) {
                case "Engineer":
                    addEngineer()
                    break;
                case "Intern":
                    addIntern()
                    break;
                default:
                    writeToFile();

            }
        })
}


function addEngineer() {
    inquirer.prompt(questions.concat(engineerQuestions)).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        myEmployee.push(engineer)
        createTeam()
    })

}
function addIntern() {
    inquirer.prompt(questions.concat(internQuestions)).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        myEmployee.push(intern)
        createTeam()
    })
}

function writeToFile(fileName, data) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(myEmployee), "utf-8")
}

addManager()
