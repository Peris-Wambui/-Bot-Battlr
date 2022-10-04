import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({yourBots,setYourBots,removeFromBot}) {
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {yourBots.map((bot) =>{
            return(
              <BotCard
              bot={bot}
              key={bot.id}
              handleBot={removeFromBot}
              isInArmy ={true}
              />
            )
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
