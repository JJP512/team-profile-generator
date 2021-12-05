const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name);
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;