import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBotToArmy,deleteBot }) {
 
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
            />
          );
        })}
      
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
