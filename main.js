import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bold.magenta("\n \t\tWelcome To Code With Huzaifah  Todo-List App\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.bold.yellow("Select an option you want to do:"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new  Task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task : "),
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.bold.cyan(`\n ${newTask.task} Task added Successfully in Todo-List`));
};
// function to view all Todo-List Tasks
let viewTask = () => {
    console.log(chalk.yellow("\n Your Todo-List: \n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// function to delete a Task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.bold.magenta("Enter the 'index no.' of the task you want to delete: "),
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.bold.blue(`\n ${deletedTask} This Task has been  deleted Successfully from your- Todo-List`));
};
// function to update a Task
let updateTask = async () => {
    await viewTask();
    let Update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.bold.greenBright("Enter the 'index no.' of the task you want to update: "),
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.yellow("Now Enter the new task: "),
        }
    ]);
    todoList[Update_task_index.index - 1] = Update_task_index.new_task;
    console.log(`\n Task at index no. ${Update_task_index.index - 1} Updated Successfully [For Updated list Check Option: "View Todo-List] `);
};
main();
