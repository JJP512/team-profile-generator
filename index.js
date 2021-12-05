const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const getRole = () => {
    return inquirer
                .prompt(
                {
                    type: "list",
                    name: "role",
                    message: "What is your role title?",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                    ]
                }
            );
};

const createManager = () => {
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
                        name: "officeNumber",
                        message: "What is your office number?"
                    }
                ]).then(employeeInfo => {
                    name = employeeInfo.name;
                    id = employeeInfo.id;
                    email = employeeInfo.email;
                    officeNumber = employeeInfo.officeNumber;

                    return manager = new Manager(name, id, email, officeNumber);
                })
    
}

const createEngineer = () => {
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
                    }
                ]).then(employeeInfo => {
                    name = employeeInfo.name;
                    id = employeeInfo.id;
                    email = employeeInfo.email;
                    github = employeeInfo.github;

                    return engineer = new Engineer(name, id, email, github);
                })
}

const createIntern = () => {
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
                    }
                ]).then(employeeInfo => {
                    name = employeeInfo.name;
                    id = employeeInfo.id;
                    email = employeeInfo.email;
                    school = employeeInfo.school;

                    return intern = new Intern(name, id, email, school);
                })
}





getRole()
.then(role => {
    switch (role.role) {
        case "Manager":
            return createManager();
        case "Engineer":
            return createEngineer();
        case "Intern":
            return createIntern();
    }
}).then(employee => {
    console.log(employee);
})