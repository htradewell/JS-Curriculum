const images =['https://picsum.photos/400/250?random=1', 'https://picsum.photos/400/250?random=2', 'https://picsum.photos/400/250?random=3', 'https://picsum.photos/400/250?random=4', 'https://picsum.photos/400/250?random=5'];
const image = document.querySelector('#sliderImg');
const fwdBtn = document.querySelector('#nextBtn');
const prvBtn = document.querySelector('#prevBtn');
const slideCount = document.querySelector('#slideCount');
let currentIndex = 0;
let timer = 0
image.src = images[currentIndex];
slideCount.textContent = (`${currentIndex + 1}/${images.length}`);
function nextImage(){
    currentIndex = (currentIndex + 1)%images.length;
    image.src = images[currentIndex];
    slideCount.textContent = (`${currentIndex + 1}/${images.length}`);
}
function startTimer() {
    timer = setInterval(nextImage, 3000);
}
startTimer();
fwdBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    nextImage()
    startTimer()
})
prvBtn.addEventListener('click', ()=>{
    currentIndex = ((currentIndex - 1)+images.length)%images.length;
    image.src = images[currentIndex];
    slideCount.textContent = (`${currentIndex + 1}/${images.length}`);
    clearInterval(timer);
    startTimer();
})