const fs = require("fs");
const inquirer = require("inquirer");

// console.log("Hello World");

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your application?",
        name: "applicationName",
        },
{
type: "input",
message: "What is your name?",
name: "name",
},
{
    type: "input",
    message: "What is the purpose of your application?",
    name: "applicationPurpose",
    },
    {
        type: "input",
        message: "What are the instructions for how to use your application?",
        name: "applicationInstructions",
        },
        {
            type: "input",
            message: "Who besides you gets credit for the construction of this application?",
            name: "applicationCredits",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
                },

]).then(response => {
    console.log(response);
    const readMeTemplate = `${response.applicationName}

This is an application built by ${response.name}.

The application is built with the intent to ${response.applicationPurpose}.

In order to use this app you must ${response.applicationInstructions}.

Special credit in the building of this application goes to ${response.applicationCredits}.

If you have any additional questions about this application, feel free to contact the application builder here: ${response.email}.`

fs.writeFile("README.md", readMeTemplate, "utf-8", (err) => {
    if (err)throw err;
    console.log("Successfully wrote README file!");
});
})


