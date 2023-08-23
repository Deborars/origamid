import React from 'react'



const obj = {carro:'azul'}
const styleCss ={
    color: "red"
  }

const App = () =>{
  const nome = 'Debora'
  const titulo = 'Esse é um título'
  return (
    <>
      {titulo}
      {obj.carro}
      <p style={styleCss}>{nome}</p>
    </>
    )
}

      


export default App
