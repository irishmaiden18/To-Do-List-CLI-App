
const prompt = require("prompt-sync")({ sigint: true })

console.log("\nWelcome to the ToDo List App!\n")
// console.log("-----------------------------------------\n")
// console.log("~ Select an action ~")
// console.log("1. Create a to-do item");
// console.log("2. Complete a to-do item");
// console.log("3. Exit the program")

let todoList = [
    {
        name: "Go to dentist",
        completed: false,
    },
    {
        name: "Buy grocceries",
        completed: true,
    },
    {
        name: "Wash car",
        completed: false,
    },
];

// let todoList = []

const displayList = () => {

    if (todoList.length === 0) {
        console.log("Your to-do list is empty.")
    } else {
        console.log(`You have ${todoList.length} to-do item(s).`)

        for (let i = 0; i < todoList.length; i++) {
            let status = "";

            if (todoList[i].completed === true) {
            // complete
            status = "[complete]";
            } else {
            // incomplete
            status = "[incomplete]";
            }

            console.log(`${i + 1}. ${status} ${todoList[i].name}`);
        }
    }
};

let choice = 0;

while (choice !== 6) {
    console.log("\n-----------------------------------------\n");

    displayList()

    console.log("\n~ Select an action ~");
    console.log("1. Create a to-do item");
    console.log("2. Complete a to-do item");
    console.log("3. Uncomplete a to-do item")
    console.log("4. Delete a to-do item from the list")
    console.log("5. Edit existing to-do item")
    console.log("6. Exit the program");

    choice = Number(prompt("> "));

    if (choice === 1) {

        //~ Creating a new to-do item ~
        console.log("~ Creating a new to-do item ~")
        // What is this to-do item called?
        console.log("What is this to-do item called?")
        // > Buy groceries
        let input = prompt("> ")

        while(input == "") {
            console.log("Please enter a new task")
            input = prompt(">")
        }

        let todoTask = {
            name: input,
            completed: false
        }

        todoList.push(todoTask)

    } else if (choice === 2) {

        // ~ Completing a to-do item ~
        console.log("~ Completing a to-do item ~")
        // Which to-do item would you like to complete?
        console.log("Which to-do item would you like to complete?")
        // > 2
        let completedInput = Number(prompt("> "))

        while(completedInput > todoList.length) {
            console.log("Out of range:")
            completedInput = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
        }

        todoList[completedInput -1].completed = true

    } else if (choice === 3) {
        // console.log("Uncomplete a to-do item")

        console.log("~ Uncompleting a to-do item ~")
        console.log("Which to-do item would you like to uncomplete?")

        let uncompletedInput = Number(prompt("> "))

        while(uncompletedInput > todoList.length) {
            console.log("Out of range:")
            uncompletedInput = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
        }

        todoList[uncompletedInput -1].completed = false

    } else if (choice === 4) {
        // console.log("Delete a to-do item from the list")

        console.log("~ Deleting a to-do item ~")
        console.log("Which to-do item would you like to delete?")

        let deleteInput = Number(prompt("> "))

        while(deleteInput > todoList.length) {
            console.log("Out of range:")
            deleteInput = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
        }

        let tempArray = []

        for (let i = 0; i < todoList.length; i++) {
            
            if (i !== deleteInput - 1) {
                tempArray.push(todoList[i])
            }
        } 
        
        todoList = tempArray

    } else if (choice === 5) {
        // console.log("Edit existing to-do item")

        console.log("~ Editing an existing to-do item ~")
        console.log("Which to-do item would you like to edit?")

        let editInput = Number(prompt("> "))

        while(editInput > todoList.length) {
            console.log("Out of range:")
            editInput = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
        }

        console.log("What would you like the to-do item to be?")
        let newText = prompt("> ") 
        while(newText === "") {
            newText = prompt("Please enter some text: ")
        }
        todoList[editInput-1].name = newText

    } else if (choice === 6) {
        console.log("Exit");
    } else {
        console.log("Invalid option");
    }
}

