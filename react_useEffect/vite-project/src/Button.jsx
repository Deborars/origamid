import React from "react";

const Button = (props)=>{
  const [count, setCount] = React.useState(1)
  const [d, setDados] = React.useState(null)


  React.useEffect(()=> { fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then((respo)=>respo.json()).then((dados)=>setDados(dados))},[])

  function handleClick(){
    // alert('oi')
    setCount(count + 1);
  }

  return(
  <>
    <p style={{background:'white', color:'black'}}>{ d && d.nome}</p>
      <button onClick={handleClick} style={{backgroundColor:'white', color:'black'}}>{props.nome}</button>
  </>
  )
}

export default Button;