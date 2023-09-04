import React, { Children } from "react";

const Titulo = (props) =>{
  return <h1 style={{color:props.cor}}>{props.texto}{props.children}</h1>
}


const App = ()=>{
  return(
    <div>
      <Titulo cor='red' texto='Meu primeiro Titulo'/>
      <Titulo cor='orange' texto='Meu segundo Titulo'/>
      <Titulo>Esse é um filho</Titulo>
    </div>
  )
}

export default App