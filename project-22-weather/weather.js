const apiKey = imNotPuttingThatOnAPublicRepo;
const cityInput = document.querySelector('#cityInput');
const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('#result');
async function weatherData(city){
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('city not found');
        const data = await response.json();
        const name = data.name;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;
        const conditions = data.weather[0].description;
        result.innerHTML = `
    <p><strong>${name}</strong></p>
    <p>${temp}&deg;C &mdash; feels like ${feelsLike}&deg;C</p>
    <p>Humidity: ${humidity}%</p>
    <p>${conditions}</p>`;
        }
        catch(error){
            result.textContent = 'Error, city not found';
        }
}
searchBtn.addEventListener('click', ()=>{
    if (cityInput.value.trim() === '') return;
    result.textContent = 'loading...';
    weatherData(cityInput.value.trim());
    
})