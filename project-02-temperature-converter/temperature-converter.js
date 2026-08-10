function celciusToFarenheit(celciusTemperature){
    const farenheit = (celciusTemperature*9/5)+32;
    return `${celciusTemperature} degrees celcius in Farenheit is ${farenheit} degrees farenheit`;
}
const C2Fresult = celciusToFarenheit(20);
console.log(C2Fresult);

function farenheitToCelcius(farenheitTemperature) {
    const celcius = (farenheitTemperature-32)*5/9;
    return `${farenheitTemperature} degrees farenheit in celcius is ${celcius} degrees celcius`;
}
const F2Cresult = farenheitToCelcius(100);
console.log(F2Cresult);