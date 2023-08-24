import React from 'react'



// const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

// const App = () => {

//   return (<div><ul>{filmes.map((filme)=><li key={filme}>{filme}</li>)}</ul></div>)
// };

const App = () =>{

const livros = [
  {nome: 'A game of Trones', ano:1996},
  {nome: 'A Clash of Kings', ano: 1998},
  {nome: 'A Storm of Swords', ano: 2000}
];

  return(
    <div>
      <ul>
        {livros.filter(({ano})=> ano > 1996).map(({nome, ano})=> <li key = {nome}>{nome} {ano}</li>)}
      </ul>
    </div>
    );

};

export default App
