import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

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

  }

  return (
    <div>
      <YourBotArmy />
      <BotCollection 
      bots ={bots}
      addBotToArmy={addBotToArmy}
      />
    </div>
  )
}

export default BotsPage;
