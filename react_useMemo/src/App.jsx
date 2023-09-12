import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)
  const valor = React.useMemo(()=>{
    let localS = localStorage.getItem('produto');
    console.log('Ocorreu o memo')
  },[localStorage.getItem('produto')])


  console.log(valor);

  function handleClick(){
    setCount(count+1)
  }  

  return (
    <>
      <button onClick={handleClick} type="button">{count}</button>
    </>
  )
}

export default App
