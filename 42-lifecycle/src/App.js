import React from 'react'

import './styles.css'
import PokeList from './components/PokeList'
import TimeOnPage from './components/TimeOnPage'
import API from './API'

class App extends React.Component {
  state = {
    pokemons: [],
    searchTerm: '',
    showOnlyNonEvolved: false,
    showTimeOnPage: true
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  toggleShowOnlyNonEvolved = () => {
    this.setState({ showOnlyNonEvolved: !this.state.showOnlyNonEvolved })
  }

  getMatchingPokemons (pokemons) {
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )
  }

  filterEvolved (pokemons) {
    if (this.state.showOnlyNonEvolved) {
      return pokemons.filter(pokemon => pokemon.isEvolution === false)
    } else {
      return pokemons
    }
  }

  componentDidMount () {
    // console.log('App is mounted!')
    API.getPokemons().then(pokemons =>
      this.setState({ pokemons: [...this.state.pokemons, ...pokemons] })
    )
  }

  componentDidUpdate () {
    // this.setState({ name: 'Nicolas' })
  }

  // shouldComponentUpdate () {
  //   if (notReady) return false
  //   return true
  // }

  render () {
    const pokemonsToRender = this.filterEvolved(
      this.getMatchingPokemons(this.state.pokemons)
    )
    return (
      <div className='App'>
        <h1>Pokesearch</h1>
        {this.state.showTimeOnPage ? <TimeOnPage /> : null}
        <input
          onChange={this.updateSearchTerm}
          className='search-input'
          placeholder='Search for a pokemon'
        />
        <label>
          Show non-evolved pokemon only
          <input
            onClick={this.toggleShowOnlyNonEvolved}
            className='non-evolved-checkbox'
            type='checkbox'
          />
        </label>
        <PokeList pokemons={pokemonsToRender} />
      </div>
    )
  }
}

export default App
