
const prompt = require("prompt-sync")({ sigint: true })

//npm i chalk@4.1.2, use the older version because of a compatibility issue with the newer version
//lets you change colors and styles of terminal text
const chalk = require("chalk")

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
            status = "[complete]"
            console.log(`${i + 1}. ${status} ` + chalk.strikethrough(`${todoList[i].name}`))
            } else {
            // incomplete
            status = "[incomplete]"
            console.log(`${i + 1}. ${status} ${todoList[i].name}`)
            }

            // console.log(`${i + 1}. ${status} ${todoList[i].name}`);
        }
    }
};

let choice = 0;

while (choice !== 5) {
    console.log("\n-------------------------------------------------------------------\n");

    displayList()

    console.log("\n~ Select an action ~");
    console.log("1. Create a to-do item");
    console.log("2. Toggle completeness of a to-do item");
    // console.log("3. Uncomplete a to-do item")
    console.log("3. Delete a to-do item from the list")
    console.log("4. Edit existing to-do item")
    console.log("5. Exit the program");

    choice = Number(prompt("> "));

    if (choice === 1) {

        //~ Creating a new to-do item ~
        console.log("~ Creating a new to-do item ~")
        // What is this to-do item called?
        console.log("What is this to-do item called?")
        // > Buy groceries
        //.trim removes leading and trailing spaces, so we can't just do spaces
        let input = prompt("> ").trim()

        while(input == "") {
            console.log("Please enter a new task")
            input = prompt(">").trim()
        }

        let todoTask = {
            name: input,
            completed: false
        }

        todoList.push(todoTask)

    } else if (choice === 2) {

        if (todoList.length === 0) {
            console.log("Please add an item before trying to complete an item")
        } else {

            // ~ Completing a to-do item ~
            console.log("~ Completing or uncompleting  a to-do item ~")
            // Which to-do item would you like to complete?
            console.log("Which to-do item would you like to complete or uncomplete?")
            // > 2

            //try catches programatic errors
            try {
                let num = Number(prompt("> "))

                while((num > todoList.length) || (num <= 0)) {
                    console.log("Out of range:")
                    //on empty string, Number converts input to zero
                    num = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
                }

                // if(todoList[completedInput-1].completed === true) {
                //     todoList[completedInput-1].completed = false
                // } else {
                //     todoList[completedInput-1].completed = true
                // }

                todoList[num - 1].completed = !todoList[num - 1].completed
            } catch (error) {
                console.log("Invalid Choice")
            }
        }

    // } else if (choice === 3) {
    //     // console.log("Uncomplete a to-do item")

    //     console.log("~ Uncompleting a to-do item ~")
    //     console.log("Which to-do item would you like to uncomplete?")

    //     let uncompletedInput = Number(prompt("> "))

    //     while(uncompletedInput > todoList.length) {
    //         console.log("Out of range:")
    //         uncompletedInput = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
    //     }

    //     todoList[uncompletedInput -1].completed = false

    // } 
    
    } else if (choice === 3) {
        // console.log("Delete a to-do item from the list")

        if (todoList.length === 0) {
            console.log("Please add an item before trying to delete an item")
        } else {

            console.log("~ Deleting a to-do item ~")
            console.log("Which to-do item would you like to delete?")

            try {

                let num = Number(prompt("> "))

                while(num > todoList.length) {
                    console.log("Out of range:")
                    num = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
                }

                let tempArray = []

                for (let i = 0; i < todoList.length; i++) {
                    
                    if (i !== num - 1) {
                        tempArray.push(todoList[i])
                    } else {
                        console.log (`${todoList[i].name} successfully deleted`)
                    }
                } 
                
                todoList = tempArray

                //could also do it with splice:
                    // .splice(startingIndex, deleteCount) - let's you remove item(s) from your array (will modify the original array)
                    // startingIndex - where in the array to start the delete process
                    // deleteCount - how many items you want to delete
                //let removed = todoList.splice(num-1,1)
                //console.log(`${removed[0].name} successfully deleted`)
                //todoList.splice(num-1,1)
                
            } catch (error) {
                console.log("Invalid Choice")
            }
        }

    } else if (choice === 4) {
        // console.log("Edit existing to-do item")

        if (todoList.length === 0) {
            console.log("Please add an item before trying to edit an item")
        } else {
        
            console.log("~ Editing an existing to-do item ~")
            console.log("Which to-do item would you like to edit?")

            try {

                let num = Number(prompt("> "))

                while(num > todoList.length) {
                    console.log("Out of range:")
                    num = Number(prompt(`Please enter a number between 1 & ${todoList.length}: `))
                }

                console.log("What would you like the to-do item to be?")
                let newText = prompt("> ") 
                while(newText === "") {
                    newText = prompt("Please enter some text: ")
                }
                todoList[num - 1].name = newText
                console.log("Task successfully edited!")

            } catch (error) {
                console.log("Invalid Choice")
            }
        }

    } else if (choice === 5) {
        console.log("Exit");
    } else {
        console.log("Invalid option");
    }
}

