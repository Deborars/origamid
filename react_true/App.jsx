import React from 'react';

const App = ()=>{

  const [arr, setArr] = React.useState(['Item 1', 'Item 2'])

  function handleClick(){
    setArr([...arr, 6] );
  }

  return(
    <div>
      {arr.map((elem)=>(<li key={elem}>{elem}</li>))}
      <button onClick={handleClick}>Clique</button>
    </div>
  )
}

export default App;