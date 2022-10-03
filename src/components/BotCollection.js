import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBotToArmy}) {
  // Your code here

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
            />
          );
        })}
      
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
