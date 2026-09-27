const api = 'no';
const input = document.querySelector('#searchInput');
const results = document.querySelector('#results');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn')
const pageInfo = document.querySelector('#pageInfo');
let currentPage = 1;
let totalPages = 1;
async function searchMovies(film){
    results.textContent = '';
    try{
        const response = await fetch(`https://www.omdbapi.com/?s=${film}&page=${currentPage}&limit=10&apikey=${api}`);
        if (!response.ok) throw new Error('please enter a full film name that actually exists');
        const data = await response.json();
        if (data.Response === 'False') throw new Error('no results');
        const html = data.Search.map(movie => `<div>Movie Name:${movie.Title} (${movie.Year})</div> ` ).join(''); //check this line first should it be movie.Search[0].Title?
        results.innerHTML = html;
        const totalResults = data.totalResults;
        totalPages = Math.ceil(totalResults/10);
    }
    catch(error){
        results.innerHTML = 'Please enter a real name'
    }
}
function disableCheck(){
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    console.log('prevBtn.disabled:', prevBtn.disabled, 'nextBtn.disabled:', nextBtn.disabled);
}
let debounceTimer;
input.addEventListener('input',()=>{
    clearTimeout(debounceTimer);
    currentPage = 1
    if (input.value === '') return;
    debounceTimer = setTimeout(async()=>{
        await searchMovies(input.value.trim());
        pageInfo.textContent = `Page: ${currentPage}/${totalPages}`;
        disableCheck()
    }, 300);
});
nextBtn.addEventListener('click', async()=>{
    currentPage = currentPage+1;
    await searchMovies(input.value.trim());
    disableCheck();
    pageInfo.textContent = `Page: ${currentPage}/${totalPages}`;
});
prevBtn.addEventListener('click', async()=>{
    currentPage = currentPage-1;
    await searchMovies(input.value.trim());
    disableCheck();
    pageInfo.textContent = `Page: ${currentPage}/${totalPages}`;
});
