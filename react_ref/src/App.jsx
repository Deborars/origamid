import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeOut = React.useRef();

  function handleClick(){
    clearTimeout(timeOut.current );
    setNotificacao('Item adicionado ao carrinho');
    setCount(count + 1)
    timeOut.current = setTimeout(()=>{setNotificacao(null)}, 1000)
  }

  return (
    <>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {count}</button>
    </>
  )
}

export default App
