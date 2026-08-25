function addItem(list, item){
    list.push(item);
    return (list);
}
const updatedList = addItem(['bannana', 'apple', 'pear'], 'beef mince');
console.log(updatedList);
function removeItem(list, item){
    const location = list.indexOf(item);
    list.splice(location, 1);
    return (list);
}
const updatedList2 = removeItem(updatedList, 'apple');
console.log(updatedList2);
function listLength(list){
    const length = list.length;
    return (length)
}
const lengthOfList = listLength(updatedList2);
console.log(lengthOfList);