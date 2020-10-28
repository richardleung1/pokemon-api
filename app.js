const container = document.querySelector('.container')

fetch('https://pokeapi.co/api/v2/pokemon/dratini')
.then(response => {
    if (response.ok) {
        return response.json();
    }
})
.then(pokemon => {
    const dratini = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        moves: pokemon.moves[13].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink: 'https://www.google.com/shopping/product/1?psb=1&tbm=shop&prds=epd%3A4577679370245728710%2Cprmr%3A3%2Cpid%3A4577679370245728710&authuser&utm_source=google_shopping&utm_medium=tu_prop&utm_content=eid-lsjeuxoeqt&utm_campaign=100945087'
    }
    console.log(dratini);
    console.log(pokemon);
    const dratiniCard = makePokemonCard(dratini);
    container.appendChild(dratiniCard);
})
.catch(error => {
    console.log(error);
});

function makePokemonCard(pokemon) {
    // Create a div element, add class, add style
    const card = document.createElement('div')
    card.classList.add('card');
    card.style.width = '18rem';
    // Create an image tag, add class, add source, add alt
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image);
    image.setAttribute('alt', `This is ${pokemon.name}`);
    // Append the image to the card div
    card.appendChild(image);
    // Create div, add class 
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
        // Create h5 element, add class, add text
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = pokemon.name;
        // Create p tag, add class, add text
    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;
        // Create a tag, add 2 class, add href, add text
    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = pokemon.move;

    const ability = document.createElement('p');
    ability.classList.add('card-text');
    ability.textContent = pokemon.ability;

    const purchaseLink = document.createElement('a');
    purchaseLink.classList.add('btn', 'btn-primary');
    purchaseLink.setAttribute('href', pokemon.purchaseLink);
    purchaseLink.textContent = `Buy ${pokemon.name} card`
        // Append to card-body div
    cardBody.appendChild(nameElement);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchaseLink);
    // Append card-body div to card
    card.appendChild(cardBody)
    // Append card div to container div
        return card;
}