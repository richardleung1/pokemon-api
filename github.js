fetch('https://api.github.com/users/richardleung1')
.then(response => {
    console.log(response);
    return response.json();
})
.then(githubData => {
    console.log(githubData);
})
.catch(error => {
    console.log(error);
});