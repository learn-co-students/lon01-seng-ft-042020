import React from 'react'

class Pokemon extends React.Component {
  componentDidMount () {
    console.log('Pokemon mounted!')
  }

  componentDidUpdate () {
    console.log('Pokemon updated!')
  }

  componentWillUnmount () {
    console.log('Pokemon is unmounting!')
  }

  render () {
    return (
      <div className='pokemon'>
        <h3>{this.props.pokemon.name}</h3>
        <img src={this.props.pokemon.image} alt='' />
      </div>
    )
  }
}

export default Pokemon
