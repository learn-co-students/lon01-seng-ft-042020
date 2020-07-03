import React from "react";

import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const BASE_URL = "https://bot-battler-api.herokuapp.com/api/v1/"

// class API {

//   static getAllBots = () => {
//     return fetch(BASE_URL + '/bots')
//     .then( r => r.json() )
//   }
// }

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
    botToView: null,
  }
  
  componentDidMount() {
    fetch(BASE_URL + '/bots')
    .then( r => r.json() )
    .then( bots => {
      // this.setState({ bots: bots })
      this.setState({ bots })
    })
  }

  enlistBot = (bot) => {
    const idsOfArmy = this.state.army.map( b => b.id )
    const robotIsNotInArmy = !idsOfArmy.includes(bot.id)
    
    if (robotIsNotInArmy) {
      this.setState({ 
        army: [...this.state.army, bot],
      })
    }
  }

  dischargeBot = (bot) => {
    console.log("DISCHARGE!!")
  }

  selectBotToView = (bot) => {
    this.setState({ botToView: bot })
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          army={this.state.army}
          dischargeBot={this.dischargeBot}
        />
        {
          this.state.botToView
          ? <BotSpecs 
            bot={this.state.botToView} 
            selectBotToView={this.selectBotToView}
          />
          : <BotCollection 
            bots={this.state.bots} 
            selectBotToView={this.selectBotToView}
          />
        }
      </div>
    );
  }

}

export default BotsPage;
