function getGrade(score){
    if (score>=90){
        return('A');
    }
    else if (score>=80){
        return('B');
    }
    else if (score>=70){
        return('C');
    }
    else if (score>=60){
        return('D');
    }
    else{
        return ('fail');
    }
}
const scores = [90, 30, 66, 75, 93];
scores.forEach(score=>{
    console.log(getGrade(score));
});