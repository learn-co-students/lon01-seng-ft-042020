function getPokemons () {
  return fetch('http://localhost:3001/pokemons').then(resp => resp.json())
}

function destroyPokemon (id) {
  return fetch(`http://localhost:3001/pokemons/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

export default { getPokemons, destroyPokemon }
