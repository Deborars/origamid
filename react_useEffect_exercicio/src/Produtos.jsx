import React from "react"
import Produto from "./Produto"

const Produtos = ()=>{
  const [produto, setProduto] = React.useState(null)

  React.useEffect(()=>{
    if(produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])

  React.useEffect(()=>{
    const produtoLocal = localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  function handleClick({target}){
    setProduto(target.innerText)
  }

  return(
      <div style={{padding:'20px', width:'500px', margin:'10px auto', display:'flex', justifyContent:'center', flexDirection:'column', boxSizing:'border-box'}}>

        <h1>Preferência: {produto}</h1>
        <div style={{padding:'20px', width:'500px', margin:'10px auto', display:'flex', justifyContent:'space-between', boxSizing:'border-box'}}>
          <button onClick={handleClick} style={{backgroundColor:'#5f0f40', color:'#ff8fab', padding:'10px 20px', border:'1px solid #f28482', cursor:'pointer'}}>smartphone</button>
          <button onClick={handleClick} style={{backgroundColor:'#5f0f40', color:'#ff8fab', padding:'10px 20px', border:'1px solid #f28482', cursor:'pointer'}}>notebook</button>
          <Produto produto={produto}/>
        </div>
      </div>
  )
}

export default Produtos