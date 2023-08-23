import React from 'react'



// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const estiloPadrao = {
    color: "blue"
    }

const estiloCustom = {
  color: "red"
}

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  // const dados = luana;
const dados = mario;

  const total = dados.compras.map((item)=> Number(item.preco.replace("R$ ", ""))).reduce((acc, preco) => acc + preco)

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p style={dados.ativa?estiloPadrao:estiloCustom }>Situação: {dados.ativa?'Ativa':'Inativa'}</p>
      <p>Gasto total: R${total}</p>
      <p>{total > 10000 ? 'Você gastou acima de R$10.000,00': 'Você gastou abaixo de R$10.000,00'}</p>
    </div>
)
};



export default App
