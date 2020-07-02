import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBotCards = () => {
    return this.props.army.map( b => 
      <BotCard 
        key={b.id} 
        bot={b}
        handleClick={this.props.dischargeBot}
      /> 
    )
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.renderBotCards() }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
