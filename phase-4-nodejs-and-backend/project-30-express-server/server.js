const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send('Welcome');
});
app.get('/about', (req, res)=>{
    res.send('This is something basic used to learn Node.js');
});
app.get('/api/greet/:name', (req, res)=>{
    const name = req.params.name;
    res.json({message: `Hello, ${name}`});
});
app.get('/api/time', (req, res)=>{
    const time = new Date();
    const strTime = time.toISOString();
    res.json({time: strTime});
});
app.get('/api/add', (req, res)=>{
    if (req.query.a === '' || req.query.b === ''){
        return res.status(400).json({error: 'Please Enter Two numbers'});
    }
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if (isNaN(a) || isNaN(b)){
        res.status(400).json({error:'Please Enter Two numbers'});
    }
    else{
        res.json({message: `${a}+${b}=${a+b}`});
    }
});
app.listen(3000, ()=>{
    console.log('server running on port 3000');
});