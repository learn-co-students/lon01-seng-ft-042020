import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotCards = () => {
    return this.props.bots.map( b => 
      <BotCard 
        key={b.id}
        bot={b} 
        handleClick={this.props.selectBotToView}
      /> 
    )
  }
  
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.renderBotCards() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
