const button = document.querySelector('#jokeBtn');
button.addEventListener('click', ()=>{
   document.querySelector('#jokeText').textContent = 'Loading...'
   fetch('https://v2.jokeapi.dev/joke/Any?type=single')
   .then(response => response.json())
   .then(data =>{
    document.querySelector('#jokeText').textContent = data.joke;
   }) .catch (error => {
   document.querySelector('#jokeText').textContent = 'Something went wrong';
})
})
