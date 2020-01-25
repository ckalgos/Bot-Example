import React, { useState } from 'react';
import { Bot, BotConfig } from 'react--customizable-chat-bot'
import './App.css';
import { Themes } from 'react--customizable-chat-bot/lib/config/config';
const App: React.FC = () => {
 
  const [configState, setConfigState] = useState(BotConfig);
  const [hideBotState, sethideBotState] = useState(false);
  let handleChange = (e: any) => {
    let newState = { ...configState }
    newState.Theme = (Number(e.target.value) as Themes);
    sethideBotState(true)
    setTimeout(() => {
      setConfigState(newState);
      sethideBotState(false);
    }, 300);
  } 
  return (
    <>
      <select value={3} onChange={handleChange}>
        <option value={0}>Default</option>
        <option value={1}>GoogleAssitant</option>
        <option value={2}>Facebook</option>
        <option value={3}>WhatsApp</option>
        <option value={4}>Snowy</option>
        <option value={5}>GradientGreen</option>
      </select>
      {hideBotState ? null : <Bot config={configState} />}
    </>
  );
}

export default App;
