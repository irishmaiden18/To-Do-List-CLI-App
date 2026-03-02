ToDo List CLI Project!

CRUD Application                         REST method
    CREATE - add new data                POST
    READ - view your data                GET                  
    UPDATE - edit existing data          PUT 
    DELETE - remove data                 DELETE

Write a program that allows a user to add different tasks to a list.
The tasks added are going to have an attached status to signify if the task has been completed or not
The user should also be able to indicate when a task is completed

The user should be able to exit the program whenever they feel like it

As best as we can for the time being, we want to make it so this code doesn't break based on the user input.  
-prevent user from adding blank tasks

We want to write our code so that it's modular! We should use functions when possible trying our best to make it so all repetive/tedious tasks are kept in their own functions

Showcase the list whenever we are in the main menu OR if the list is empty

Example:

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

BONUS FEATURES:
-Allow the user to both complete and uncomplete to-do items
-Allow the user to fully delete a to-do item from the list
-Allow the user to edit the text of an existing to-do item
