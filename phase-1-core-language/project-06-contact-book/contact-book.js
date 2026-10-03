function addContact(contacts, name, phone, email){
    contacts[name] = { phone: phone, email: email };
    return contacts;
}
const contacts={};
addContact(contacts, 'harry', '0723882845', 'example@example.com');
console.log(contacts);

function getContact(contacts, name) {
    const searchResult = contacts[name];
    if(searchResult === undefined){
        return('That name is not in the contact book');
    }
    else{
    return (searchResult);
    }
}
const Result = getContact(contacts, "bob");
console.log(Result);

function listContactNames(contacts){
  const names = Object.keys(contacts);
  return (names);
}
const namesReturned = listContactNames(contacts);
console.log(namesReturned);
