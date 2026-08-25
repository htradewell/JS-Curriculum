// set the two buttons and header to usable variables
const upBtn = document.querySelector('#incrementBtn');
const resetBtn = document.querySelector("#resetBtn");
const number = document.querySelector("#count");
//sets counter
let counter = 0;
// sets the background color changer as a fucntion
function backgroundColorChange(){
    if (counter === 0){
        number.style.color = 'black';
    }
    else {
        number.style.color = 'green';
    }
}
number.textContent = counter;
// sets upBtn as listening for a click
upBtn.addEventListener("click", ()=>{
    counter = counter+1;
    number.textContent = counter;
    backgroundColorChange()
});
resetBtn.addEventListener("click", ()=>{
    counter = 0;
    number.textContent = counter;
    backgroundColorChange()
});

