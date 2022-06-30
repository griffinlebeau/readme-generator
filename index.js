// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//inquirer
const data = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            name:'title',
            type:'input',
            message:'WHat is the title of your project?',
            validate: function (input) {
                if (!input) {
                    console.log('You must enter a project title!')
                    return
                }
            }

        },
        {
            name: 'confirmDesc',
            type: 'confirm',
            message: 'Would you like to include a description of your project?'
        },
        {
            name: 'desc',
            type: 'input',
            message: 'Describe your project:',
            when: ({confirmDesc}) => {
                if (confirmDesc) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name: 'confirmInstall',
            type: 'confirm',
            message: 'Would you like to include installation instructions?'
        },
        {
            name: 'install',
            type: 'input',
            message: 'Installation instructions:',
            when: ({confirmInstall}) => {
                if (confirmInstall) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name : 'confirmUsage',
            type: 'confirm',
            message: 'Would you like to include usage instructions?'
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Usage:',
            when: ({confirmUsage}) => {
                if (confirmUsage) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name: 'license',
            type: 'choices',
            message: 'Please select your license:',
            choices: ['Public Domain', 'Creative Commons', 'Copyright']
        },
        {
            name: 'contribute',
            type: 'input',
            message: 'Contributors:',
        },
        {
            name: 'confirmTest',
            type:'confirm',
            message: 'Would you like to include testing information?'
        },
        {
            name: 'test',
            type:'input',
            message: 'Testing information:'
        }
    ])
    .then(answers => {
        data.push(answers.title);
            if (answers.confirmDesc === true) {
                data.push(answers.desc)
            };
            if (answers.confirmInstall === true) {
                data.push(answers.install)
            };
            if (answers.confirmUsage === true) {
                data.push(answers.usage)
            };
        data.push(answers.license);
        data.push(answers.contribute);
            if (answers.confirmTest === true) {
                data.push(answers.test)
            }
    })



// TODO: Create a function to write README file
const writeToFile = data => {
    const mdData = generateMarkdown(data)
    FileSystem.writeToFile('/README.md', mdData, err => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
//init();
}
