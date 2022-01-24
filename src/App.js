import React from 'react';
import Filtros  from './Components/Filtros';
import Produtos from './Components/Produtos/Produtos';
import styled from "styled-components";
import Carrinho from './Components/Carrinho/Carrinho';
import img1 from "./img/como estudar e aprender.png"
import img2 from "./img/htmlparaleigos.png"
import img3 from "./img/Javascriptguiadoprogramador.png"
import img4 from "./img/omelhorjs.png"
import img5 from "./img/primeirospassoscomreact.png"
import img6 from "./img/react aprnda praticando.png"

const ConteinerApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  :root{
  margin: 0;
  padding: 0;
}
`
const produto = [
  {
	id: 1,
	nome: "JavaScript guia do programador",
	preco: 100,
	foto: img1,
}, 
{
	id: 2,
	nome: "O melhor do JavaScript",
	preco: 400,
	foto: img2,
},
{
	id: 3,
	nome: "Html, xhtml e css para leigos",
	preco: 800,
	foto: img3,
},
{
	id: 4,
	nome: "Primeiros passos com React",
	preco: 500,
	foto: img4,
},
{
	id: 5,
	nome: "React aprenda praticando",
	preco: 600,
	foto: img5,
},
{
	id: 6,
	nome: "Como estudar e aprender",
	preco: 700,
	foto: img6,
}
]

class App extends React.Component{
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nomeFilter: 'Produto',
    productsInCart: [
      {
        id: 6,
        nome: "Como estudar e aprender",
        preco: 210,
        foto: img6,
      }
    ]
  }

  render () {
    return (
      <ConteinerApp>
        <Filtros
        />
        <Produtos produto={produto}
        />
        <Carrinho 
        />
      </ConteinerApp>
    )
  }
}
  export default App
