import React from 'react'


function App() {
  const [form, setForm] = React.useState({nome:'', email:''});


  function handleSubmit (event){
    event.preventDefault();
  }

  function handleChange(event){
    const {id, value} = event.target;
    setForm({...form ,[id]:value})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome </label>
        <input id="nome" type="text" value={form.nome} onChange={handleChange} />
        {form.nome}

        <label htmlFor="email">Email </label>
        <input id="email" type="email" value={form.email} onChange={handleChange} />
        {form.email}
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
