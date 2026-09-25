const api = 'no';
const input = document.querySelector('#searchInput');
const results = document.querySelector('#results');
let currentPage = 1;
async function searchMovies(film){
    results.textContent = '';
    try{
        const response = await fetch(`https://www.omdbapi.com/?s=${film}&page=${currentPage}&limit=10&apikey=${api}`);
        if (!response.ok) throw new Error('please enter a full film name that actually exists');
        const data = await response.json();
        if (data.Response === 'False') throw new Error('no results');
        const html = data.Search.map(movie => `<div>Movie Name:${movie.Title} (${movie.Year})</div> ` ).join(''); //check this line first should it be movie.Search[0].Title?
        results.innerHTML = html;
    }
    catch(error){
        results.innerHTML = 'Please enter a real name'
    }
}
let debounceTimer;
input.addEventListener('input', ()=>{
    clearTimeout(debounceTimer);
    if (input.value === '') return;
    debounceTimer = setTimeout(()=>{
        searchMovies(input.value.trim());
    }, 300);
});