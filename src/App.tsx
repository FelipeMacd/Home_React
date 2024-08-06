import Home from './pages/home/Home';
import './App.css';
import { useState } from 'react';

function App() {

  const [valor, setValor] = useState(0);

  function handleClick(){
    setValor(valor + 1);
  }

  return (
    //  <Home  title="Componente Home"
    //  description="Este é um componente Home que recebe props."/>
    <div>
      <p>O valo é: {valor}</p>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
}

export default App;
