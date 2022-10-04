import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]=useState([]);
  const [yourBots, setYourBots]= useState([]);
  

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then ((res)=>res.json())
    .then((data)=>setBots(data))
  },[]);

  function addBotToArmy(bot){
    if(yourBots.includes(bot))return;
    setYourBots([...yourBots,bot]);
  }

  function removeFromBot(bot) {
    setYourBots(yourBots.filter(bots=>bots!==bot))
  } 

  return (
    <div>
      <YourBotArmy
      bots={bots}
      yourBots={yourBots}
      setYourBots={setYourBots}
      removeFromBot={removeFromBot}
      />

     <BotCollection 
      bots ={bots}
      addBotToArmy={addBotToArmy}
      setBots={setBots}
      />
    </div>
  )
}

export default BotsPage;
