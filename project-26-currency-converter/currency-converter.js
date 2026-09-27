const convertBtn = document.querySelector('#convertBtn');
const amountInput = document.querySelector('#amountInput');
const from = document.querySelector('#fromCurrency');
const to = document.querySelector('#toCurrency');
const result = document.querySelector('#result')
async function converter(amount, fromCurrency, toCurrency){
    result.textContent = '';
    try{
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!response.ok) throw new Error ('oopsie');
        const data = await response.json();
        if (data.result !== 'success') throw new Error('no results');
        const amountInUSD = amount / data.rates[fromCurrency];
        const converted = amountInUSD * data.rates[toCurrency];
        result.textContent = `${amount}${fromCurrency} = ${converted.toFixed(2)}${toCurrency}`;
    }
    catch (error){
    result.textContent = 'Something went wrong.';
    }
}
convertBtn.addEventListener('click', ()=>{
    if (amountInput.value === '') return;
    converter(Number(amountInput.value), from.value, to.value);
})
