// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
//inquirer

const promptUser = () => {
    console.log(`
    ===================
    Create A New ReadMe
    ===================
    `);
    return inquirer
    .prompt([
        {
            name:'title',
            type:'input',
            message:'What is the title of your project?',
            validate: function (titleInput) {
                if (titleInput) {
                    return true
                } else {
                    console.log('You must enter a project title!');
                    return false
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
            name: 'confirmLicense',
            type: 'confirm',
            message: 'Do you have a license?',
        },
        {
            name: 'license',
            type: 'checkbox',
            message: 'Please select your license:',
            choices: ['Public Domain', 'Creative Commons', 'Copyright'],
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true
                } else {
                    return false
                }
            }
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
            message: 'Testing information:',
            when: ({confirmTest}) => {
                if (confirmTest) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
}


// TODO: Create a function to write README file
const writeToFile = data => {
    const mdData = generateMarkdown(data)
    fs.writeToFile('/README.md', mdData, err => {
        if (err) {
            console.log(err);
        }
    });
}


// Function call to initialize app
promptUser().then(answers => {
    console.log(answers)
    console.log(data)
    //writeToFile(data)
})

