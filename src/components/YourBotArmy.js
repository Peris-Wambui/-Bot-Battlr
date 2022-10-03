import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({yourBots,setYourBots}) {
  //your bot army code here...
  function removeBotFromArmy(bot){
  const newArmy =yourBots.filter((b)=>b.id !== BotCard.id);
  setYourBots(newArmy);
}

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
              removeBotFromArmy={removeBotFromArmy}
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
