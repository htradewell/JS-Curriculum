function addTodo(list, text){
    list.push({text: text, done: false});
    return list;
}
const list = [
  { text: "buy milk", done: false },
  { text: "call jonah", done: true }
]
const newItem = "drink aforementioned milk";
const newList = addTodo(list, newItem);
console.log(newList);

function completeTodo(list, text){
    const request = list.find(answer => answer.text === text);
    if (request === undefined){
      return(`${text} is not in the list`);
    }
    else {
        request.done = true;
        return list;
    }
} 
const newList2 = completeTodo(newList, 'call jonah');
console.log(newList2);

function listTodo(list){
  list.forEach(task=>{
    console.log(task);
  });
}

listTodo(newList2);