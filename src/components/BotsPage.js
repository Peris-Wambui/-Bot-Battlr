import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]=useState([]);
  const [yourBots, setYourBots]= useState([]);
  const [activeBot, setActiveBot]= useState(null);

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then ((res)=>res.json())
    .then((data)=>setBots(data))
  },[]);

  function addBotToArmy(bot){
    if(yourBots.includes(bot))return;
    setYourBots([...yourBots,bot]);
  }

  return (
    <div>
      <YourBotArmy
      yourBots={yourBots}
      setYourBots={setYourBots}
      />
     { activeBot?(
     <BotSpecs 
        bot ={activeBot}
        setActiveBot ={setActiveBot}
        setYourBots={setYourBots}
     />
     ):( 
     <BotCollection 
      bots ={bots}
      addBotToArmy={addBotToArmy}
      setBots={setBots}
      setActiveBot={setActiveBot}
      />
    )}
    </div>
  )
}

export default BotsPage;
