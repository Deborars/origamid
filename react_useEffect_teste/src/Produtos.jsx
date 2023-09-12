import React from 'react'

export const Produtos = () => {

  const [dados, setDados] = React.useState(null);
  const [produto, setProduto] = React.useState(null)

  const estilos = {
    marginRight:'10px',
    color:'#fff',
    padding:'10px',
    background:'#14213d'
  }

  React.useEffect(()=>{fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`).then((response)=>response.json()).then((retorno)=> setProduto(retorno))}, [dados])


  function handleClick(event){
    const produtoLocal = event.target.innerText;
    if(produtoLocal !== null) setDados(produtoLocal);
  }

  return (
    <div>
      <h1>Preferências: {dados}</h1>
      <div>
        <button onClick={handleClick} style={estilos}>notebook</button>
        <button onClick={handleClick} style={estilos}>smartphone</button>
      </div>
      <div>
        {produto && produto.nome }
        <br/>
        {produto && produto.preco }
      </div>
    </div>
  )
}


// 