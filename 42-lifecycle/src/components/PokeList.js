import React from 'react'
import Pokemon from './Pokemon'

function PokeList (props) {
  return (
    <div className='pokemon-list'>
      {props.pokemons.map(pokemon => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokeList
