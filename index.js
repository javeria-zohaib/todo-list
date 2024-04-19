#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
while (conditions) {
    let addtask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: chalk.blue("Enter your new task:")
        }]);
    todolist.push(addtask.task);
    console.log(`${todolist}  task added  in todolist sucessfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("Do you want to add more task?"),
            default: "false",
        },
    ]);
    conditions = addMoreTask.addmore;
}
console.log(`your updated To-Do list:`, todolist);
