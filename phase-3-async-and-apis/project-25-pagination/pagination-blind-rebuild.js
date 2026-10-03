const searchBtn = document.querySelector('#searchBtn');
const filmInput = document.querySelector('#searchInput');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const displayArea = document.querySelector('#results');
const pageInfo = document.querySelector('#pageInfo');
let currentPage = 1;
let totalPages = 1;
const api = '3410ba68';
async function searchFilm(film){
    try{
        displayArea.innerHTML = 'Loading...';
        const response = await fetch(`https://www.omdbapi.com/?s=${film}&page=${currentPage}&limit=10&apikey=${api}`);
        if (!response.ok) throw new Error ('Error in response');
        const data = await response.json();
        if (data.Response !== 'True') throw new Error ('Error in data processing (json)');
        displayArea.innerHTML ='';
        const html = data.Search.map(film=>`<div>Title ${film.Title} (${film.Year})</div>
            <img src='${film.Poster}'>`).join('');
        const li = document.createElement('li');
        li.innerHTML = html;
        displayArea.appendChild(li);
        totalPages = Math.ceil(Number(data.totalResults)/10);
        pageInfo.textContent = `Page${currentPage}/${totalPages}`;
        disableCheck();
    }
    catch (error){
        displayArea.innerHTML = 'please enter a real film name or check spelling';
        console.log(error);
    }
}
function disableCheck(){
    nextBtn.disabled = currentPage===totalPages;
    prevBtn.disabled = currentPage===1;
}
nextBtn.addEventListener('click', async()=>{
    currentPage = currentPage+1;
    await searchFilm(filmInput.value);
});
prevBtn.addEventListener('click', async()=>{
    currentPage = currentPage-1;
    await searchFilm(filmInput.value);
});
let debounceTimer;
filmInput.addEventListener('input', async()=>{
    clearTimeout(debounceTimer);
    currentPage = 1;
    debounceTimer = setTimeout(()=>{
        searchFilm(filmInput.value);
    },300);
});