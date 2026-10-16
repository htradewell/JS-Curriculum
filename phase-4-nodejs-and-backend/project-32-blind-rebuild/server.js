// 1. IMPORTS
//    express, fs, path
const express = require('express');
const fs = require('fs');
const path = require('path');
// 2. APP SETUP
//    create the app
//    add the middleware that parses JSON bodies (must come before any routes)
const app = express();
app.use(express.json());
// 3. FILE PATH
//    one constant holding the full path to todos.json, built from the current file's folder
const FILE = path.join(__dirname, 'todos.json');
// 4. LOAD FUNCTION (file -> array)
//    if the file doesn't exist: return an empty array
//    try:
//        read the file as text, parse it
//        if the result is an array: return it
//        otherwise: return an empty array
//    catch: log the error, return an empty array
function load(){
    if (!existsSync(FILE)) return[];
    try{
        const fileData = JSON.parse(fs.readFileSync(FILE, 'utf-8'));
        if (!Array.isArray(fileData)) throw new Error('todos.json does not contain an array');
        return fileData;
    }
    catch(error){
        console.log(error);
        return[];
    }
}
// 5. IN-MEMORY STATE
//    todos = result of the load function
//    (declared so it can be reassigned later)
let todos = load();
// 6. SAVE FUNCTION (array -> file)
//    write the todos array to the file as JSON text
function save(){
    fs.writeFileSync(FILE, JSON.stringify(todos));
}
// 7. HELPER: find a todo from the request's :id
//    convert the id from the URL to a number
//    return the todo with that id, or undefined
function helper(req, res){
    const foundId = Number(req.params.id);
    const foundTodo = todos.find(todo => todo.id === foundId);
    return(foundTodo);
}
// 8. ROUTES
//    GET    /todos
//        respond with all todos
//    GET    /todos/:id
//        validate the id is a whole number -> 400 if not
//        find the todo -> 404 if missing
//        respond with the todo
//    POST   /todos
//        validate text is a non-empty string after trimming -> 400 if not
//        build the todo (id, trimmed text, done false)
//        add to todos, SAVE, respond 201 with the todo
//    PUT    /todos/:id
//        validate the id -> 400 if not
//        find the todo -> 404 if missing
//        mark it done, SAVE, respond with the todo
//    DELETE /todos/:id
//        validate the id -> 400 if not
//        find the todo -> 404 if missing
//        remove it from todos, SAVE, respond with a message

// 9. START THE SERVER
//    listen on a port, log a message in the callback