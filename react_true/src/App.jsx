import Header from "./Header2.jsx";
import Home from "./Home.jsx";
import Produtos from "./Produtos.jsx";


const App = () =>{
  const { pathname } = window.location;
  let Component;
  if(pathname == '/produtos'){
      Component = Produtos;
  }else{
      Component = Home;
  }

  return(
    <>
      <Header/>
      <Component/>
    </>
  )
}

export default App;