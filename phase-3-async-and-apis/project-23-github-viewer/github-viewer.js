const usernameInput = document.querySelector('#usernameInput');
const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('#result');
async function getData(username){
    result.innerHTML = 'loading...';
    try{
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!profileResponse.ok) throw new Error('profile doesnt exist');
        const profileData = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`)
        const repoData = await repoResponse.json();
        const name = profileData.name;
        const bio = profileData.bio;
        const followers = profileData.followers;
        const publicRepos = profileData.public_repos;
        result.innerHTML = `
    <img src="${profileData.avatar_url}" alt="${profileData.login}">
    <p><strong>${name}</strong></p>
    <p>${bio}</p>
    <p>Followers: ${followers}</p>
    <p>Public Repos: ${publicRepos}</p>`;
        repoData.forEach(repo => {
            const div = document.createElement('div');
            const a = document.createElement('a');
            a.href = repo.html_url;
            a.textContent = repo.name;
            a.target = '_blank';
            div.appendChild(a);
            result.appendChild(div);
});
    }
    catch(error){
        result.textContent = 'Error';
    }
}
searchBtn.addEventListener('click', ()=>{
    if (usernameInput.value.trim() === '') return;
    getData(usernameInput.value);
})
