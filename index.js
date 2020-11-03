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
type: "list",
message: "What type of license would you like?",
name: "licenseType",

    choices: [
        "MIT License",
        "Apache License 2.0",
        "GNU GPLv3",
    ]

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

                {
                    type: "input",
                    message: "what is your github username?",
                    name: "github",



                }

]).then(response => {
    console.log(response);
    const readMeTemplate = `# ${response.applicationName}
## Description
The application is built with the intent to ${response.applicationPurpose}.
## Author 
This is an application built by ${response.name}.


* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contact](#contact)


## License
This project has a ${response.licenseType} license. 
## Usage

In order to use this app you must ${response.applicationInstructions}.
## Credit 

Special credit in the building of this application goes to ${response.applicationCredits}.

## Contact 

If you have any additional questions about this application, feel free to contact the application builder here: ${response.email}.

If you would like to browse the GitHub page of this applications builder visit their Github profile here: https://github.com/${response.github}. `

fs.writeFile("README.md", readMeTemplate, "utf-8", (err) => {
    if (err)throw err;
    console.log("Successfully wrote README file!");
});
})


