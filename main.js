/*

// todo item - keep track of the name of the task AND if the task is completed or not
todo: {
    name: string
    completed: boolean
}

todoList - [todo]

ToDo List CLI Project!

Write a program that allows a user to add different tasks to a list.
The tasks added are going to have an attached status to signify if the task has been completed or not
The user should also be able to indicate when a task is completed

The user should be able to exit the program whenever they feel like it

As best as we can for the time being, we want to make it so this code doesn't break based on the user input.  
-prevent user from adding blank tasks

We want to write our code so that it's modular! We should use functions when possible trying our best to make it so all repetive/tedious tasks are kept in their own functions

Showcase the list whenever we are in the main menu OR if the list is empty

//Example
Welcome to the To-Do List Manager Application! 

==============================================

Your to-do list is empty.

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Go to the dentist

==============================================

You have 1 to-do item(s).
1. [incomplete] Go to the dentist

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Buy groceries

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [incomplete] Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 2

~ Completing a to-do item ~
Which to-do item would you like to complete?
> 2

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [complete]   Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
>

*/

/* BONUS FEATURES:
-Allow the user to both complete and uncomplete to-do items
-Allow the user to fully delete a to-do item from the list
-Allow the user to edit the text of an existing to-do item
*/

const prompt = require("prompt-sync")({ sigint: true })

// 1. setting up the menu
// 2. printing an example list
// -give you time to figure out how to add an item to a list
// 3. go over adding an item to a list

// NEXT WEEK
// 4. completing todo items
// 5. dealing with bad input


console.log("\nWelcome to the ToDo List App!\n")
// console.log("-----------------------------------------\n")
// console.log("~ Select an action ~")
// console.log("1. Create a to-do item");
// console.log("2. Complete a to-do item");
// console.log("3. Exit the program")

/*
// a way for the user to make a choice
- let choice = Number(prompt("> "));

// a way to keep asking the user to make a choice until they exit the program
- while loop

*/

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

