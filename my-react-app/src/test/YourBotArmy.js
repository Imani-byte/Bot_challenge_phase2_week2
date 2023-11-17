import React from 'react';
import './YourBotArmy.css';

const YourBotArmy = ({ yourBotArmy, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;

