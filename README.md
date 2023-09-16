# ZenNotes

## Description

ZenNotes is a simple note taking application that allows you to create, edit, and delete notes. It is built using MongoDB, Express, React, and Node.js; commonly referred to as the MERN stack.

## Installation

To install ZenNotes, clone the repository to your local machine. Then,

    1. Navigate to the backend directory of the project and run the following command to install the dependencies:

    ```bash
    npm install 
    ```

    2. Navigate to the frontend directory of the project and run the following command to install the dependencies:

    ```bash
    npm install 
    ```

Doing these two steps will install all of the dependencies for the backend and frontend of the application, from the respective package.json files.

## Pre-requisites

To run ZenNotes, you will need to have MongoDB installed on your local machine. You can learn more about installing MongoDB [here](https://docs.mongodb.com/manual/installation/).

## Operations

### Create a Note

To create a note, click the "New Note" button in the top left corner of the screen. This will open a modal window where you can enter the title and content of your note. Once you have entered the title and content, click the "Submit" button to save your note.

### View a Note

Once note(s) is/are created, they will be displayed in a table on the home page. The table will display the title of the note, and it's content.

### Edit a Note

If you wish to edit a note upon creation, you can do so by clicking the "Edit" button in the right column of the table on the home page. This will open a modal window where you can edit the title and content of your note. Once you have made your changes, click the "Submit" button to save your note.

### Delete a Note

If you wish to delete a note, you can do so by clicking the "Delete" button in the right column of the table on the home page. This will delete the note from the database.
