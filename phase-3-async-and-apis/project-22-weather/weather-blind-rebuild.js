const cityInput = document.querySelector('#cityInput');
const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('#result');
const apiKey = 'ImNotPuttingThatInAPublicRepo';
async function getWeather(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('Error in response');
        const data = await response.json();
        const html = `<div>City Name: ${data.name}</div>
        <div>Temperature: ${data.main.temp} degrees celcius</div>
        <div>Feels-like: ${data.main.feels_like} degrees celcius</div>
        <div>humidity: ${data.main.humidity}</div>
        <div>Conditions: ${data.weather[0].description}</div>`;
        result.innerHTML = html;
    }
    catch (error){
        result.innerHTML = '<div>please enter another city name or check spelling</div>';
    }
}
searchBtn.addEventListener('click', async()=>{
    if (cityInput.value === '') return;
    result.innerHTML = 'Loading...'
    await getWeather(cityInput.value);
});