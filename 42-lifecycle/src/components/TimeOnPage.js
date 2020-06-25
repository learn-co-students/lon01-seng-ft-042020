import React from 'react'

class TimeOnPage extends React.Component {
  state = {
    secondsOnPage: 0
  }

  componentDidMount () {
    this.handle = setInterval(
      () => this.setState({ secondsOnPage: this.state.secondsOnPage + 1 }),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.handle)
  }

  render () {
    return (
      <p>You've been on this page for {this.state.secondsOnPage} seconds.</p>
    )
  }
}

export default TimeOnPage
