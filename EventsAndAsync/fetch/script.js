const createPokemonCard = (pokemon) => {
    // card container
    const pokemonCard = document.createElement("div");
    // data wrapper
    const pokemonCardInner = document.createElement("div");
    const pokemonCardFront = document.createElement("div");
    const pokemonCardBack = document.createElement("div");
    // image
    const pokemonImg = document.createElement("img");
    // image background
    const imageBackground = document.createElement("div")
    // pokemon data
    const pokemonDataBasic = document.createElement("div");
    const pokemonDataDetailed = document.createElement("ul");
    const pokemonName = document.createElement("h2");
    const pokemonPower = document.createElement("p");

    // set up classes
    pokemonCard.classList.add("card");
    pokemonCardInner.classList.add("card_inner_wrapper");
    pokemonCardFront.classList.add("card_wrapper_front");
    pokemonCardBack.classList.add("card_wrapper_back");
    pokemonImg.classList.add("card__img");
    imageBackground.classList.add("card_image_background");
    pokemonDataBasic.classList.add("card__stats");
    pokemonName.classList.add("card__pokemon_name");
    pokemonPower.classList.add("card__pokemon_data");
    
    // assign content
    pokemonImg.src = pokemon.sprites.front_default;
    const name = pokemon.name;
    pokemonName.textContent = name;
    pokemonPower.textContent = `Power: ${pokemon.base_experience}`
    const stats = pokemon.stats;
    stats.forEach((elem) => {
        const listElem = document.createElement("li");
        const statName = document.createElement("span");
        const statValue = document.createElement("span");
        listElem.classList.add("detail");

        statName.textContent = `${elem.stat.name}: `;
        statValue.textContent = elem.base_stat;

        listElem.appendChild(statName)
        listElem.appendChild(statValue);
        pokemonDataDetailed.appendChild(listElem);
    })

    // flip card logic
    pokemonCardFront.addEventListener("click", () => {
        pokemonCard.classList.add("flip");
    });

    pokemonCardBack.addEventListener("click", () => {
        pokemonCard.classList.remove("flip");
    })

    // glue everything together
    pokemonDataBasic.appendChild(pokemonName);
    pokemonDataBasic.appendChild(pokemonPower);
    imageBackground.appendChild(pokemonImg);
    pokemonCardFront.appendChild(imageBackground);
    pokemonCardFront.appendChild(pokemonDataBasic);
    pokemonCardBack.appendChild(pokemonDataDetailed);
    pokemonCardInner.appendChild(pokemonCardFront);
    pokemonCardInner.appendChild(pokemonCardBack);
    pokemonCard.appendChild(pokemonCardInner);

    // append card to the body
    document.body.appendChild(pokemonCard);
}

const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json()

    createPokemonCard(pokemon);
}

const fetchPokemons = (amountOfPokemons) => {
    for(let i=1; i < amountOfPokemons; i++) {
        fetchPokemon(i);
    }
}

fetchPokemons(40)