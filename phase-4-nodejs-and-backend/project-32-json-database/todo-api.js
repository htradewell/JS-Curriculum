const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
app.use(express.json());
const FILE = path.join(__dirname, 'todos.json');
function fileToArray() {
    if (!fs.existsSync(FILE)) return [];
    try {
        const readAndParsed = JSON.parse(fs.readFileSync(FILE, 'utf-8'));
        if (Array.isArray(readAndParsed)) return readAndParsed;
        throw new Error('todos.json does not contain an array')
    } catch (err) {
        console.log(err);
        return []; 
    }
}
let todos = fileToArray();
function arrayToFile(){
    return fs.writeFileSync(FILE, JSON.stringify(todos));
}
app.get('/todos', (req, res)=>{
    res.json(todos);
});
app.post('/todos', (req, res)=>{
    const text = req.body && req.body.text;
    if (!text || typeof text !=='string' || text.trim()==='') return res.status(400).json({error: 'please enter a valid todo'});
    const todo = ({id: Date.now(), text: req.body.text.trim() , done: false});
    todos.push(todo);
    arrayToFile();
    res.status(201).json(todo);
});
function getWithId(req){
    const givenId = Number(req.params.id);
    return todos.find(todo=> todo.id === givenId);
}
app.put('/todos/:id', (req,res)=>{
    const givenTodo = getWithId(req);
    if (!givenTodo) return res.status(404).json({error: 'Please give an ID that exists'});
    givenTodo.done = true;
    arrayToFile();
    res.json(givenTodo);
});
app.delete('/todos/:id', (req, res)=>{
    const givenTodo = getWithId(req);
    if (!givenTodo) return res.status(404).json({error: 'Please give an ID that exists'});
    todos = todos.filter(todo => todo.id !==givenTodo.id);
    arrayToFile();
    res.json({message: 'The Todo with the given ID has been eliminated Sire'});
});
app.listen(3000, ()=>{
    console.log('server running on port 3000');
});
