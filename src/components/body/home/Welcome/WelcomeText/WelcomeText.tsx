// import { useState } from 'react';
// import { TypeAnimation } from 'react-type-animation';
import './WelcomeText.css'

export default function WelcomeText(){
  // const [textColor, setTextColor] = useState('#01edf9');

  return (
    <div id="text" className="welcome-text-container">
      <p id="text-1" className="text-1 type">Olá, Eu sou Pedro Bueno.👋</p>
      <p id="text-2" className="text-2 type">Desenvolvedor web fullstack.</p>
      <br />
      <p id="text-3" className="text-3 type">Seja bem vindo ao meu portifólio!</p>
      <p id="text-4" className="text-4 type">Vem, vamos me conhecer mais um pouco. Acesse o menu para navegar no site.</p>
    </div>
  )
}