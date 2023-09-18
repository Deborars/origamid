import React from 'react'



function App() {

    function handleSubmit (event){
      event.preventDefault();
    }

  return (
    <>
      <form onSubmit={handleSubmit} >
      <label htmlFor="nome">Nome </label>
      <input type="text" name="nome" id="nome" value=''/>

      <label htmlFor="email">Email </label>
      <input type="email" name="email" id="email" value='' />

      <label htmlFor="senha">Senha </label>
      <input type="password" name="senha" id="senha" value='' />

      <label htmlFor="cep">CEP </label>
      <input type="text" name="cep" id="cep" value='' />

      <label htmlFor="rua">Rua </label>
      <input type="text" name="rua" id="rua" value='' />

      <label htmlFor="numero">Número </label>
      <input type="text" name="numero" id="numero" value='' />

      <label htmlFor="bairro">Bairro </label>
      <input type="text" name="bairro" id="bairro" value='' />

      <label htmlFor="cidade">Cidade </label>
      <input type="text" name="cidade" id="cidade" value='' />

      <label htmlFor="estado">Estado </label>
      <input type="text" name="estado" id="estado" value='' />

      <button>Enviar</button>
      </form>
    </>
  )
}

export default App
