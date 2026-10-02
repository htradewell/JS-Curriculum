const site = 'https://www.themealdb.com/api/json/v1/1/search.php?s=SEARCHTERM'
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const categoryInput = document.querySelector('#category');
let recipieInfo = [];
const ul = document.querySelector('#displayZone');
async function getRecipies(search){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if (!response.ok) throw new Error('Error in fetch');
        const data = await response.json();
        if (data.meals ===null) throw new Error('Error in search term');
            console.log(data);
            recipieInfo = [];
            data.meals.forEach(meal=>{
                recipieInfo.push({'mealName': meal.strMeal, 'cuisine': meal.strArea, 'thumbnail': meal.strMealThumb, 'category': meal.strCategory});
            });
            recipieInfo.sort((a, b) => a.mealName.localeCompare(b.mealName));    
            if (categoryInput.value === 'Any'){
                const html = recipieInfo.map(meal=>`<img src=${meal.thumbnail}></img>
                    <div>Meal Name: ${meal.mealName}</div>
                    <div>Cuisine: ${meal.cuisine}</div>
                    <div>Category:${meal.category}</div>`).join('');
                    ul.innerHTML = html;
            }
        
            else{
                recipieInfo=recipieInfo.filter(recipie=>recipie.category === categoryInput.value);
                const html = recipieInfo.map(meal=>`<img src=${meal.thumbnail}></img>
                    <div>Meal Name: ${meal.mealName}</div>
                    <div>Cuisine: ${meal.cuisine}</div>
                    <div>Category:${meal.category}</div>`).join('');
                    ul.innerHTML = html;
            }
            
}
    catch(error){
        console.log(`Error: ${error}`)
    }
}
searchBtn.addEventListener('click', async()=>{
    ul.innerHTML = '';
    console.log(searchInput.value)
    await getRecipies(searchInput.value);
})

let debounceTimer;
searchInput.addEventListener('input', async()=>{
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async()=>{
        await getRecipies(searchInput.value);
    }, 300);
});

categoryInput.addEventListener('input', async()=>{
    await getRecipies(searchInput.value)
})