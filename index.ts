#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos : string[] = [];

console.log(chalk.cyanBright("\n \t Welcome To 1mr2joy6-To_Do-Application \n"));

async function createTodo(todos:string[]){
    do{
         let answer = await inquirer.prompt(
        [
            {
                type: "list",
                name: "addOption",
                message: chalk.green("Please select an operation:"),
                choices: ["Add Task", "View Task", "Update Task", "Delete Task"]
            }
        ]
    )
       if(answer.addOption === "Add Task"){
        let addTodo = await inquirer.prompt(
            [
                {
                    type: "input",
                    message: chalk.greenBright("Enter your task:"),
                    name: "todo"
                }
            ]
        );
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(todo));
        // console.log(todos)
       };
       if(answer.addOption === "View Task"){
        console.log(chalk.cyan("\n \t *** TO_DO LIST ***\n"))
        // console.log(todos);
        todos.forEach(todo => console.log(todo));
        console.log(chalk.cyan("\n \t -x-x-x-x-x-x-x- \n"))
       };
       if(answer.addOption === "Update Task"){
        let updateTodo = await inquirer.prompt(
            [
                {
                    type: "list",
                    message: chalk.cyanBright("Select what task did you want to update:"),
                    name: "update",
                    choices: todos.map(tasks => tasks)
                }
            ]
        );
        let addTodo = await inquirer.prompt(
            [
                {
                    type: "input",
                    message: chalk.greenBright("Enter your task:"),
                    name: "todo"
                }
            ]
        );
        let newTodo = todos.filter(val => val !== updateTodo.update);
        todos =[...newTodo,addTodo.todo];
        // console.log(todos);
        todos.forEach(todo => console.log(todo));
       };
       if(answer.addOption === "Delete Task"){
        let deleteTodo = await inquirer.prompt(
            [
                {
                    type: "list",
                    message: chalk.redBright("Select what task did you want to delete:"),
                    name: "update",
                    choices: todos.map(tasks => tasks)
                }
            ]
        );
        let newTodo = todos.filter(val => val !== deleteTodo.update);
        todos =[...newTodo];
        // console.log(todos);
        todos.forEach(todo => console.log(todo));
       };
    }
    while(true)
}

createTodo(todos);