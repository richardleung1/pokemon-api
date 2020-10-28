//const container = document.querySelector('.container')

fetch('https://api.github.com/users/richardleung1')
.then(response => {
    console.log(response);
    return response.json();
})
.then(githubData => {
    const richardObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(richardObj);
    console.log(githubData);

    const newElement = document.createElement('p');
    newElement.textContent = richardObj.name;
    container.appendChild(newElement);
})
.catch(error => {
    console.log(error);
});