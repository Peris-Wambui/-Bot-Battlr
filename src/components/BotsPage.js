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
    setYourBots([...yourBots,bot]);
  }

  function deleteBot(bot) {
    const updateYourBots = yourBots.filter((b) => b.id !== bot.id);
    const updateBots = bots.filter((b) => b.id !== bot.id);

    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setYourBots(updateYourBots)
      setBots(updateBots)})
  }

  return (
    <div>
      <YourBotArmy
      bots={bots}
      yourBots={yourBots}
      setYourBots={setYourBots}
      deleteBot={deleteBot}
      />

     <BotCollection 
      bots ={bots}
      addBotToArmy={addBotToArmy}
      deleteBot={deleteBot}
      />
    </div>
  )
}

export default BotsPage;
