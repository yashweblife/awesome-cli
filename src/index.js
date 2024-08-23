#!usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import inquirer from "inquirer";
async function getName() {
    const output = await inquirer.prompt([
        {
            name: "projectName",
            type: "input",
            message: "Project name: "
        },
        {
            name: "projectType",
            type: "list",
            message: "Project type: ",
            choices: ["Server", "WebApp", "Mobileapp"]
        }
    ])
    return output;
}
async function createServerProjectOptions() {
    const output = await inquirer.prompt([
        {
            name: "framework",
            type: "list",
            message: "Framework: ",
            choices: ["Express", "GO"]
        }
    ])
    return output.framework;
}
async function createExpressProjectOptions() {
    const output = await inquirer.prompt([
        {
            name: "framework",
            type: "confirm",
            message: "Typescript: ",
            default: true,
            transformer: (answer) => answer ? "👍" : "👎"
        },
        {
            name: "versionControl",
            type: "confirm",
            message: "Git: ",
            default: true,
            transformer: (answer) => answer ? "👍" : "👎"
        },
        {
            name: "Packages",
            type: "checkbox",
            message: "Packages: (Press ENTER to ignore)",
            choices: ["None", "Body Parser", "Mongoose", "CORS"]
        }
    ])
    return output;
}
async function createWebAppProjectOptions() {
    const output = await inquirer.prompt([
        {
            name: "framework",
            type: "list",
            message: "Framework: ",
            choices: ["React", "Vue", "Simple", "CLI", "VSCode Extension"]
            
        },
        {
            name: "Typescript",
            type: "confirm",
            message: "Typescript: ",
            default: true,
            transformer: (answer) => answer ? "👍" : "👎"
        },
        {
            name: "versionControl",
            type: "confirm",
            message: "Git: ",
            default: true,
            transformer: (answer) => answer ? "👍" : "👎"
        },
    ])
    return output.framework;
}

async function createMobileAppProjectOptions() {
    const output = await inquirer.prompt([
        {
            name: "framework",
            type: "list",
            message: "Framework: ",
            choices: ["React Native", "Expo"]
        }
    ])
    return output.framework;
}

program
    .version("1.0.0")
    .description("Awesome CLI for your project")
    .action(() => {
        console.log(chalk.magenta("Awesome CLI"));
        console.log(chalk.red("Name your project:"));
        getName().then((answer) => {
            if (answer.projectType === "Server") {
                createServerProjectOptions().then((framework) => {
                    createExpressProjectOptions().then((framework) => {
                        console.log(framework);
                    })
                })
            }
            else if (answer.projectType === "WebApp") {
                createWebAppProjectOptions().then((framework) => {
                    console.log(framework);
                })
            }
            else if (answer.projectType === "Mobileapp") {
                createMobileAppProjectOptions().then((framework) => {
                    console.log(framework);
                })
            }

        })
    })

program.parse(process.argv);