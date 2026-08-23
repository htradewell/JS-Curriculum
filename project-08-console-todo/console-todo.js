function addTodo(list, text){
    list.push({text: text, done: false});
    return list;
}
const todo = [
    {text: "buy milk", done: false},
    {text: "call jonah", done: false}
];
const newTask = 'eat mushroom';
const newList = addTodo(todo,newTask);
console.log(newList);

function completeTodo(list,text){
    const found = list.find(todo => todo.text === text);
    if (found === undefined){
        return 'no item with that name';
    }
    else {
        found.done = true;
        return list;
    }
}
const newList2 = completeTodo(newList, "buy milk");
console.log(newList2);

function listOut(list){
    list.forEach(task =>{
        console.log(`text ${task.text}, done: ${task.done}`);
    });
}
listOut(newList2);