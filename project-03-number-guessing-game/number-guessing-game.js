function numberChecker(userNumber){
    const generatedNumber = 1+Math.floor(Math.random()*100);
    if (userNumber===generatedNumber){
        return('Correct');
    }
    else if (userNumber>generatedNumber){
        return('number is too high');
    }
    else if (userNumber<generatedNumber){
        return('number is too low');
    }
    else {
        return('incorrect format');
    }
}
const result = numberChecker(39);
console.log(result);