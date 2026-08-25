//set array of colours
const colors = ["red", "blue", "green", "purple", "orange"];
//asociate the button ellement with a variable
const btn = document.querySelector("#flipBtn");
//asociate the colour of the display with a variable
const colorTitle = document.querySelector('#colorDisplay');
//listen for a click, when clicked sets colour
btn.addEventListener('click', () =>{
    const colorChosenIndex = Math.floor(Math.random() * colors.length);
    const colorChosen = colors[colorChosenIndex];
    document.body.style.backgroundColor = colorChosen;
    colorTitle.textContent = `Current Color: ${colorChosen}`;
})