//set the things were going to need as usable variables
const textarea = document.querySelector("#textInput");
const charCount = document.querySelector("#charCount");
//change the counter on each input
textarea.addEventListener("input", ()=>{
    charCount.textContent = (`${textarea.value.length}/200`);
    if (textarea.value.length >= 200){
        charCount.style.color = 'red';
    }
    else if (textarea.value.length >=150){
        charCount.style.color = 'orange';
    }
    else{
        charCount.style.color = 'black';
    }
});