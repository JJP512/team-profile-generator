const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/page-template");
const fs = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};


const createManager = () => {
    teamList = [];

    return inquirer
                .prompt([
                    {
                        type: "text",
                        name: "name",
                        message: "What is your manager's name?"
                    },
                    {
                        type: "text",
                        name: "id",
                        message: "What is your manager's ID?"
                    },
                    {
                        type: "text",
                        name: "email",
                        message: "What is your manager's email?"
                    },
                    {
                        type: "text",
                        name: "officeNumber",
                        message: "What is your manager's office number?"
                    },
                    {
                        type: "list",
                        name: "addMember",
                        message: "Would you like to add a team member?",
                        choices: [
                            "Engineer",
                            "Intern",
                            "None"
                        ]
                    }
                ]).then(employeeInfo => {
                    teamList.push(employeeInfo);
                    
                    newEmployee(teamList);
                })
}

const createEngineer = teamInfo => {
    
    teamList = teamInfo;

    return inquirer
                .prompt([
                    {
                        type: "text",
                        name: "name",
                        message: "What is your name?"
                    },
                    {
                        type: "text",
                        name: "id",
                        message: "What is your ID?"
                    },
                    {
                        type: "text",
                        name: "email",
                        message: "What is your email?"
                    },
                    {
                        type: "text",
                        name: "github",
                        message: "What is your GitHub username?"
                    },
                    {
                        type: "list",
                        name: "addMember",
                        message: "Would you like to add a team member?",
                        choices: [
                            "Engineer",
                            "Intern",
                            "None"
                        ]
                    }
                ]).then(employeeInfo => {    
                    teamList.push(employeeInfo);
                    newEmployee(teamList);
                })
}

const createIntern = teamInfo => {
    teamList = teamInfo;

    return inquirer
                .prompt([
                    {
                        type: "text",
                        name: "name",
                        message: "What is your name?"
                    },
                    {
                        type: "text",
                        name: "id",
                        message: "What is your ID?"
                    },
                    {
                        type: "text",
                        name: "email",
                        message: "What is your email?"
                    },
                    {
                        type: "text",
                        name: "school",
                        message: "What is the name of your school?"
                    },
                    {
                        type: "list",
                        name: "addMember",
                        message: "Would you like to add a team member?",
                        choices: [
                            "Engineer",
                            "Intern",
                            "None"
                        ]
                    }
                ]).then(employeeInfo => {
                    teamList.push(employeeInfo);
                    newEmployee(teamList);
                })
}

const createTemplate = teamInfo => {
    html = generateHTML(teamInfo);

    writeFile(html);
}

i = 0;

const newEmployee = teamInfo => {
    switch (teamInfo[i].addMember) {
        case "None":
            break;
        case "Engineer":
            i++;
            return createEngineer(teamInfo);
        case "Intern":
            i++;
            return createIntern(teamInfo);
    }

    createTemplate(teamInfo);    
}

createManager();
