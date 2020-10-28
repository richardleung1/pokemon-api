fetch('https://api.spacexdata.com/v3')
.then(response => {
    console.log(response);
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/cores/Merlin1A')
.then(response => {
    console.log(response);
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/capsules/C112')
.then(response => {
    console.log(response);
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/dragons/dragon1')
.then(response => {
    console.log(response);
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});
