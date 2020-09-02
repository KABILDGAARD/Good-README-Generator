const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badge links."
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project description."
    },
    {
        type: "input",
        name: "visuals",
        message: "Please provide screenshots of project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage."
    },
    {
        type: "input",
        name: "support",
        message: "Is there support for this project?"
    },
    {
        type: "input",
        name: "roadmap",
        message: "Please outline project roadmap."
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the project licence."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests."
    },
    {
        type: "input",
        name: "status",
        message: "What is the project status?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github.com username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your github.com repo link?"
    },
    {
        type: "input",
        name: "deployed",
        message: "Please provide link to deployed site is applicable."
    },
];

// function to write README file
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("README file successful!");
          });
        });

});

// function to initialize program
function init() {

}

// function call to initialize program
init();