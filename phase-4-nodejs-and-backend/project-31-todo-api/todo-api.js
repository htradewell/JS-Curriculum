const express = require('express');
const app = express();
app.use(express.json());
let todos = [];
app.get('/todos', (req, res)=>{
    res.json(todos);
});
app.post('/todos', (req, res)=>{
    const text = req.body && req.body.text;
    if (!text || text.trim()==='') return res.status(400).json({error: 'please enter a todo'});
    const todo = ({id: Date.now(), text: req.body.text , done: false});
    todos.push(todo);
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
    res.json(givenTodo);
});
app.delete('/todos/:id', (req, res)=>{
    const givenTodo = getWithId(req);
    if (!givenTodo) return res.status(404).json({error: 'Please give an ID that exists'});
    todos = todos.filter(todo => todo.id !==givenTodo.id);
    res.json({message: 'The Todo with the given ID has been eliminated Sire'});
});
app.listen(3000, ()=>{
    console.log('server running on port 3000');
});
