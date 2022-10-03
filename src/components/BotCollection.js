import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBotToArmy,setBots, setActiveBot, removeBotFromArmy}) {
  // Your code here
  function deleteBot(deleteBot){
    const UpdatedBots = bots.filter((bot)=>{
      return bot.id !==deleteBot.id
    })
    setBots(UpdatedBots)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot)=>{
          return(
            <BotCard
            bot={bot}
            key={bot.id}
            addBotToArmy={addBotToArmy}
            onDelete ={deleteBot}
            setActiveBots={setActiveBot}
            removeBotFromArmy={removeBotFromArmy}


            />
          );
        })}
      
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
