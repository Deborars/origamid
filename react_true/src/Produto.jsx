import React from 'react'


export const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border:'1px solid yellow', marginBottom:'5px', padding:'5px'}}>
      <p>{nome}</p>
      <ul>
        {
          propriedades.map((propriedade)=>(<li>{propriedade}</li>))
        }
      </ul>
    </div>
  )
}
