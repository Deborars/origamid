import React from 'react';
import Button from './src/Button'

const App = ()=>{

  const [valor, setValor ] = React.useState(1);

  function handleClick(){
    setValor(valor + 1)
  }

  return(
    <>
      <p>Valor: {valor}</p>
      <button onClick={handleClick}>Clique</button>
      <Button/>
    </>
  )
}

export default App;


  // const [arr, setArr] = React.useState(['Item 1', 'Item 2'])

  // const arr = React.useState(false);

  