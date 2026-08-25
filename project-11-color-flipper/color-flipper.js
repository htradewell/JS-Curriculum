//sets array of colors
const colors = ['red', 'orange', 'green', 'blue', 'purple'];
// asigns the button element to a usable variable
const btn = document.querySelector('#flipBtn');
// asigns the title color to a usable variable
const colorTitle = document.querySelector('#colorDisplay');
// changes color and title on click
btn.addEventListener("click", () =>{
    const colorChosen = colors[Math.floor(Math.random() * colors.length)];
    colorTitle.textContent = `Color Chosen: ${colorChosen}`;
    document.body.style.backgroundColor = colorChosen;
});

