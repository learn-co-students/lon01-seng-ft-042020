const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// Fetch all trainers from the server
const fetchTrainers = () => {
  // Make a GET request to the backend to get all trainers
  return fetch(TRAINERS_URL)
    // Parse the response from the backend (all the trainers) into an array of JSON objects
    .then(response => response.json())
}
// Render a card for each trainer
const renderTrainers = () => {
  // Get all the trainers from the backend
  fetchTrainers()
    // When the backend has successfully responded with every trainer object, render a card for each one
    .then(trainers => {
      for(let trainer of trainers) {
        renderTrainer(trainer)
      }
    })
}
const renderTrainer = trainer => {
  // Create a div with the class of card
  const div = document.createElement("div")
  div.classList.add("card")
  // Create a p tag with this trainer's name
  const p = document.createElement("p")
  p.innerText = trainer.name
  // Create a button that says Add Pokemon
  const button = document.createElement("button")
  button.innerText = "Add Pokemon"
  // Create an unordered list for this trainer's Pokemon
  const ul = document.createElement("ul")

  // For each of this trainer's Pokemon, render their information and add it to the ul
  for(let pokemon of trainer.pokemons) {
    renderPokemon(pokemon, ul)
  }

  // When the add Pokemon button is clicked, create a new Pokemon for this trainer on the backend
  button.addEventListener("click", () => {
    addPokemon(trainer)
    // When the backend responds with the newly created Pokemon, render it and add it to this trainer's list
    .then(pokemon => renderPokemon(pokemon, ul))
  })

  // Append the elements we've created to the card
  div.appendChild(p)
  div.appendChild(button)
  div.appendChild(ul)

  // Append the card we've created to the main tag
  document.querySelector("main").appendChild(div)
}

// Render each of a trainer's Pokemon
const renderPokemon = (pokemon, list) => {
  // Render an li with this Pokemon's nickname and species
  const li = document.createElement("li")
  li.innerText = `${pokemon.nickname} (${pokemon.species})`
  // Render a button that says Release
  const button = document.createElement("button")
  button.innerText = "Release"


  // Append the button to the li
  li.appendChild(button)
  // Append the li to the trainer's list of Pokemon
  list.appendChild(li)
  // When the release Pokemon button is clicked, delete that Pokemon on the backend
  button.addEventListener("click", () => {
    releasePokemon(pokemon)
    // When the Pokemon has been successfully deleted from the backend, remove its li from the frontend
    .then(() => {
      li.remove()
    })
  })
}


// Add a Pokemon
const addPokemon = trainer => {
  // Create a configuration object in order to make a POST request
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // The body of the request will contain this trainer's id, so that the backend can create a new Pokemon belonging to this trainer
    body: JSON.stringify({ trainer_id: trainer.id })
  }
  // Make the request to the server to create this new Pokemon and return the response (the newly created Pokemon) parsed into JSON
  return fetch(POKEMONS_URL, configurationObject)
    .then(response => response.json())
}

// Release (Delete) a Pokemon
const releasePokemon = pokemon => {
  // Create a configuration object in order to make a DELETE request
  const configurationObject = {
    method: "DELETE"
  }
  // Make the request to the server to delete this Pokemon
  return fetch(`${POKEMONS_URL}/${pokemon.id}`, configurationObject)
}

// When the page loads, render a card for each trainer and all of their Pokemon
renderTrainers()
