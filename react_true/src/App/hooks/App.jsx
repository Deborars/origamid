import React from "react";

const App = ()=>{

  const [estado, setEstado] = React.useState(true);
  const [valor, setValor] = React.useState(1);

  function handleClick (){
    return setEstado(!estado);
  }

  return(
    <div>
      <p>Valor {valor}</p>
      <button onClick={handleClick} >{estado?'Inativo':'Ativo'}</button>
    </div>
  )

}

export default App;