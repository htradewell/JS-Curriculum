function guess(userNumber){
    const compNumber = Math.floor(Math.random()*100)+1;
    if(compNumber === userNumber){
        return('you Guessed right!!');
    }
    else if(compNumber>userNumber){
        return('too small');
    }
    else if(userNumber>compNumber){
        return('too big');
    }
    else{
        return('wrong format');
    }
}
const result = guess(44);
console.log(result);
