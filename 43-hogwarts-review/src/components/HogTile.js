import React from 'react'

// const HogTile = (props) => {
//   const calculatesImageName = () => {
//     return props.hog.name.toLowerCase().split(" ").join("_")
//   }

//   const imagePath = () => {
//     const image = require(`../hog-imgs/${calculatesImageName()}.jpg`)
//     return image
//   }

//   const handleClick = () => {
//     debugger
//   }

//   return (
//     <div className="ui eight wide column" onClick={handleClick}>
//       <img src={imagePath()}/>
//       <h2>{props.hog.name}</h2>
      
//     </div>
//   )
// }

class HogTile extends React.Component {

  state = {
    showDetails: false,
  }

  calculatesImageName = () => {
    return this.props.hog.name.toLowerCase().split(" ").join("_")
  }

  imagePath = () => {
    const image = require(`../hog-imgs/${this.calculatesImageName()}.jpg`)
    return image
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  renderDetails = () => {
    return <div>
      <p>Specialty: {this.props.hog.specialty}</p>
      <p>Weight: {this.props.hog.weight}</p>
      <p>{this.props.hog.greased ? "Greased" : "Not Greased"}</p>
      <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
    </div>
  }

  render() {
    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
      <img alt="a pig" src={this.imagePath()}/>
      <h2>{this.props.hog.name}</h2>
      {
        this.state.showDetails 
        ? this.renderDetails()
        : null
      }
      </div>
    )
  }
}

export default HogTile