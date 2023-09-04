import React from 'react'



// const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

// const App = () => {

//   return (<div><ul>{filmes.map((filme)=><li key={filme}>{filme}</li>)}</ul></div>)
// };

const App = () =>{

const handleClick = (e)=>{
  alert(e.target.innerText)
  }
  return(
    <div>
      <button onClick={handleClick}>botão</button>
    </div>
    );

};

export default App
