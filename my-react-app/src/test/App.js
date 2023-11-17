import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    // Fetch bots data from the backend
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!yourBotArmy.some(b => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    // Remove the bot from yourBotArmy
    const updatedArmy = yourBotArmy.filter(b => b.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    // Remove the bot from both frontend and backend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the bot from the frontend
        const updatedBots = bots.filter(b => b.id !== bot.id);
        setBots(updatedBots);

        // Remove the bot from yourBotArmy if enlisted
        const updatedArmy = yourBotArmy.filter(b => b.id !== bot.id);
        setYourBotArmy(updatedArmy);
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <h1>Bot Army</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
